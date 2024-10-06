import { ColorType, createChart, CrosshairMode } from 'lightweight-charts';
import { useEffect, useRef, useState } from 'react';
import './Dashboard.css';
;

function Dashboard() {
    const chartContainerRef = useRef();
    
    const [priceColor, setPriceColor] = useState("gray");
    const Coins = ["ethusdt", "bnbusdt", "dotusdt"];
    const Intervals = ["1m", "3m", "5m"];
    

    const [symbol, setSymbol] = useState("ethusdt");
    const [interval, setInterval] = useState("1m");

    let [currentData, setCurrentData] = useState({});
    let history = [];
    // localStorage.removeItem("StoredHistory_ethusdt_1m");
    // localStorage.removeItem("StoredHistory_ethusdt_3m");
    // localStorage.removeItem("StoredHistory_ethusdt_5m");
    // localStorage.removeItem("StoredHistory_bnbusdt_1m");
    // localStorage.removeItem("StoredHistory_bnbusdt_3m");
    // localStorage.removeItem("StoredHistory_bnbusdt_5m");
    // localStorage.removeItem("StoredHistory_dotusdt_1m");
    // localStorage.removeItem("StoredHistory_dotusdt_3m");
    // localStorage.removeItem("StoredHistory_dotusdt_5m");
    let prevStoredData = localStorage.getItem(`StoredHistory_${symbol}_${interval}`);
    if(prevStoredData){
        history = JSON.parse(prevStoredData);
        console.log("prevhistory ",history);
    }

    


    const handleSocketChange=(currency,interval) => {

        prevStoredData = localStorage.getItem(`StoredHistory_${symbol}_${interval}`);
        if(prevStoredData){
            history = JSON.parse(prevStoredData);
            console.log("prevhistory ",history);
        }
        return (currency||interval) ? new WebSocket(`wss://stream.binance.com:9443/ws/${currency}@kline_${interval}`) : new WebSocket(`wss://stream.binance.com:9443/ws/ethusdt@kline_1m`);
    }
    




    let prev = null;

    let finalCandle = {
        open: 0,
        high: 0,
        low: 0,
        close: 0,
        time: 0,
    }

    const StoreHistory = (data) => {

        if(prev!==null){
            if(prev.time!==data.time){
                finalCandle.close = prev.close;

                history.push(finalCandle);
                console.log("finalCandle",finalCandle);
                prev = data;

                finalCandle = prev;

                localStorage.setItem(`StoredHistory_${symbol}_${interval}`, JSON.stringify(history));
                console.log(`StoredHistory_${symbol}_${interval}`,localStorage.getItem(`StoredHistory_${symbol}_${interval}`));
            }
            else{
            
                finalCandle.high = Math.max(prev.high,data.high);
                console.log("high",Math.max(prev.high,data.high))
                finalCandle.low = Math.min(prev.low,data.low);
                console.log("low",Math.min(prev.low,data.low))
                console.log("finalCandleHL",finalCandle);
                
                prev=data;

                console.log("prev",prev)
                console.log("data",data)
            }
        }
        else{
            prev = data;
            finalCandle= prev;
        }
    }


    useEffect(
        () => {

            

            var binance = handleSocketChange(symbol,interval);
            
            const handleResize = () => {
                chart.applyOptions({ width: chartContainerRef.current.clientWidth });
            };

            

            const chart = createChart(chartContainerRef.current, {
                layout: {
                    background: { type: ColorType.Solid, color: '#2b2b2b' },
                    textColor: '#ffffff',
                },
                grid: {
                vertLines: { color: '#444' },
                horzLines: { color: '#444' },
        },
                width: chartContainerRef.current.clientWidth,
                height: 720,
                crosshair: {
                    mode: CrosshairMode.Normal,
                    vertLine: {
                        color: 'rgba(197, 203, 206, 0.8)',
                        width: 1,
                        style: 0,
                        visible: true,
                        labelBackgroundColor: 'rgba(197, 203, 206, 0.8)',
                    },
                    horzLine: {
                        color: 'rgba(197, 203, 206, 0.8)',
                        width: 1,
                        style: 0,
                        visible: true,
                        labelBackgroundColor: 'rgba(197, 203, 206, 0.8)',
                    },
                },
                priceScale: {
                    borderColor: 'rgba(197, 203, 206, 0.8)',
                },
                timeScale: {
                    borderColor: 'rgba(197, 203, 206, 0.8)',
                    timeVisible: true,
                    secondsVisible: false,
                },
                tooltip: {
                    borderColor: 'rgba(197, 203, 206, 0.8)',
                    
                }
            });
            chart.timeScale().fitContent();
        
            const series = chart.addCandlestickSeries({ upColor: '#26a69a', downColor: '#ef5350', borderVisible: false, wickUpColor: '#26a69a', wickDownColor: '#ef5350' });
            
            let historicalData = JSON.parse(localStorage.getItem(`StoredHistory_${symbol}_${interval}`));
            if (historicalData) {
                series.setData(historicalData);
            }

            chart.priceScale("right").applyOptions({
                borderColor: "rgba(197, 203, 206, 0.8)",
            })

            chart.timeScale().applyOptions({
                rightOffset: 20,
                barSpacing: 15,
                fixLeftEdge: true,
                // tickMarkFormatter: (time,TickMarkType,locale) => {
                //     const date = new Date(time*1000);
                //     switch(TickMarkType){
                //         case TickMarkType.Year:
                //             return date.getFullYear();
                //         case TickMarkType.Month:
                //             {const monthFormatter = new Intl.DateTimeFormat(locale, { month: "short" });
                //             return monthFormatter.format(date);}
                //         case TickMarkType.DayOfMonth:
                //             return date.getDate();
                //         case TickMarkType.Time:
                //             {const timeFormatter = new Intl.DateTimeFormat(locale, { hour: "numeric", minute: "numeric" });
                //             return timeFormatter.format(date);}
                //         case TickMarkType.TimeWithSeconds:
                //             {const timewithsecondsFormatter = new Intl.DateTimeFormat(locale, { hour: "numeric", minute: "numeric", second: "numeric" });
                //             return timewithsecondsFormatter.format(date);}
                //         default:
                //             console.log("default");

                //     }
                // }
            })
            
            //chart.timeScale().fitContent();
            chart.timeScale().scrollToPosition(5);

            binance.onopen = () => {
            console.log("Connection established");
        }
            binance.onmessage =   (e) => {
            const sd =  JSON.parse(e.data);
            


            const newData = {
                open: parseFloat(sd.k.o),
                high: parseFloat(sd.k.h),
                low: parseFloat(sd.k.l),
                close: parseFloat(sd.k.c),
                time: (sd.k.t)/1000,
                symbol: sd.s.toLowerCase(),
            }
            if(newData.symbol===symbol){
                setCurrentData(newData);
            }
            
            series.update(newData);

            console.log("new ",newData);


            StoreHistory(newData);

            console.log("history ",history);
        }


            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);

                chart.remove();
            };
        },
        [symbol,interval]
    );

    useEffect(() => {
        (currentData.close>currentData.open)?setPriceColor("green"):setPriceColor("red");
    }, [currentData]);

    return (
        <div className="flex flex-row w-full h-svh text-white">
            <div className="w-1/12 h-full bg-gray-700 flex flex-col gap-4 p-2">
                <div className="flex flex-col gap-1">
                    <label htmlFor="coin">Coin</label>
                    <select id="coin" onChange={e=>setSymbol(e.target.value)} className='text-black'>
                        {
                            Coins.map((symbol)=><option key={symbol} value={symbol}>{symbol.toUpperCase()}</option>)
                        }
                    </select>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="interval">Interval</label>
                    <select id="interval" onChange={(e)=>setInterval(e.target.value)} className='text-black'>
                        {
                            Intervals.map((interval)=><option key={interval} value={interval}>{interval}</option>)
                        }
                    </select>
                </div>
                
                    
                    
            </div>

            <div className="w-11/12 h-full bg-gray-800">
                <div className="mixed-chart p-2 h-5/6">
                    <div className='w-full h-full relative'
                        ref={chartContainerRef}
                    >
                        <div id="priceDisplay" className='absolute top-4 left-4 z-50 border border-gray-200 text-left p-2 w-48 overflow-hidden bg-slate-800'>
                            <h3 className='text-xl'>{symbol.toUpperCase()}</h3>

                            {/* <h1 className="text-2xl font-bold"
                                style={{color:priceColor}}
                                >Price&nbsp;${currentData.close}
                            </h1> */}
                            
                        </div>
                    </div>
                    {/* <div ref={tooltipRef}>
                        <h3></h3>
                    </div> */}

                </div>
                    {/* <button className="inline-block px-6 py-2 duration-200 bg-gray-300 hover:bg-gray-600 rounded-lg" onClick={() => chart.timeScale().scrollToRealTime()}>
                        Go to realtime
                    </button> */}
                </div>
            </div>
       


    );
}

export default Dashboard;
