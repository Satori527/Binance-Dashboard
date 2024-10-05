import { createChart, CrosshairMode } from 'lightweight-charts';
import { useEffect, useRef } from 'react';
import './Dashboard.css';

function Test () {

    const chartContainerRef = useRef(null);
    const newData = [
        {
            "open": 2424,
            "high": 2424.7,
            "low": 2423.99,
            "close": 2424.69,
            "time": 1728122100,
            "_internal_originalTime": 1728122100
        },
        {
            "open": 2424.69,
            "high": 2424.7,
            "low": 2424.27,
            "close": 2424.28,
            "time": 1728122160,
            "_internal_originalTime": 1728122160
        },
        {
            "open": 2424.28,
            "high": 2424.28,
            "low": 2423.81,
            "close": 2423.82,
            "time": 1728122220,
            "_internal_originalTime": 1728122220
        },

    ]
    const data = [
        {
            "open": 2424,
            "high": 2424.7,
            "low": 2423.99,
            "close": 2424.69,
            "time": 1728122100000,
            "_internal_originalTime": 1728122100000
        },
        {
            "open": 2424.69,
            "high": 2424.7,
            "low": 2424.27,
            "close": 2424.28,
            "time": 1728122160000,
            "_internal_originalTime": 1728122160000
        },
        {
            "open": 2424.28,
            "high": 2424.28,
            "low": 2423.81,
            "close": 2423.82,
            "time": 1728122220000,
            "_internal_originalTime": 1728122220000
        },
        {
            "open": 2423.81,
            "high": 2425.86,
            "low": 2423.69,
            "close": 2425.86,
            "time": 1728122280000,
            "_internal_originalTime": 1728122280000
        },
        {
            "open": 2425.86,
            "high": 2425.86,
            "low": 2425.12,
            "close": 2425.13,
            "time": 1728122340000,
            "_internal_originalTime": 1728122340000
        },
        {
            "open": 2425.12,
            "high": 2425.13,
            "low": 2424.23,
            "close": 2424.23,
            "time": 1728122400000,
            "_internal_originalTime": 1728122400000
        },
        {
            "open": 2424.24,
            "high": 2424.56,
            "low": 2424.08,
            "close": 2424.25,
            "time": 1728122460000,
            "_internal_originalTime": 1728122460000
        },
        {
            "open": 2424.25,
            "high": 2425.1,
            "low": 2424.1,
            "close": 2425.1,
            "time": 1728122520000,
            "_internal_originalTime": 1728122520000
        },
        {
            "open": 2425.09,
            "high": 2425.1,
            "low": 2424.2,
            "close": 2424.2,
            "time": 1728122580000,
            "_internal_originalTime": 1728122580000
        },
        {
            "open": 2424.21,
            "high": 2424.46,
            "low": 2423.4,
            "close": 2424.45,
            "time": 1728122640000,
            "_internal_originalTime": 1728122640000
        },
        {
            "open": 2424.46,
            "high": 2424.46,
            "low": 2423.21,
            "close": 2423.21,
            "time": 1728122700000,
            "_internal_originalTime": 1728122700000
        },
        {
            "open": 2423.21,
            "high": 2424.13,
            "low": 2423.14,
            "close": 2424.12,
            "time": 1728122760000,
            "_internal_originalTime": 1728122760000
        },
        {
            "open": 2424.13,
            "high": 2425.62,
            "low": 2424.13,
            "close": 2425.61,
            "time": 1728122820000,
            "_internal_originalTime": 1728122820000
        },
        {
            "open": 2425.61,
            "high": 2426.15,
            "low": 2425.61,
            "close": 2425.95,
            "time": 1728122880000,
            "_internal_originalTime": 1728122880000
        },
        {
            "open": 2425.95,
            "high": 2426.6,
            "low": 2425.95,
            "close": 2426.59,
            "time": 1728122940000,
            "_internal_originalTime": 1728122940000
        },
        {
            "open": 2426.6,
            "high": 2426.78,
            "low": 2426.2,
            "close": 2426.77,
            "time": 1728123000000,
            "_internal_originalTime": 1728123000000
        },
        {
            "open": 2426.77,
            "high": 2426.95,
            "low": 2426.77,
            "close": 2426.84,
            "time": 1728123060000,
            "_internal_originalTime": 1728123060000
        },
        {
            "open": 2426.85,
            "high": 2426.85,
            "low": 2426.04,
            "close": 2426.04,
            "time": 1728123120000,
            "_internal_originalTime": 1728123120000
        },
        {
            "open": 2426.04,
            "high": 2426.05,
            "low": 2425,
            "close": 2425.01,
            "time": 1728123180000,
            "_internal_originalTime": 1728123180000
        },
        {
            "open": 2425,
            "high": 2425.2,
            "low": 2425,
            "close": 2425.06,
            "time": 1728123240000,
            "_internal_originalTime": 1728123240000
        },
        {
            "open": 2425.07,
            "high": 2425.07,
            "low": 2424.52,
            "close": 2425.07,
            "time": 1728123300000,
            "_internal_originalTime": 1728123300000
        },
        {
            "open": 2425.07,
            "high": 2425.07,
            "low": 2424.81,
            "close": 2424.82,
            "time": 1728123360000,
            "_internal_originalTime": 1728123360000
        },
        {
            "open": 2424.82,
            "high": 2424.82,
            "low": 2424,
            "close": 2424.2,
            "time": 1728123420000,
            "_internal_originalTime": 1728123420000
        },
        {
            "open": 2424.2,
            "high": 2424.47,
            "low": 2423.84,
            "close": 2423.97,
            "time": 1728123480000,
            "_internal_originalTime": 1728123480000
        },
        {
            "open": 2423.97,
            "high": 2424.59,
            "low": 2423.97,
            "close": 2424.14,
            "time": 1728123540000,
            "_internal_originalTime": 1728123540000
        },
        {
            "open": 2424.14,
            "high": 2424.15,
            "low": 2423.6,
            "close": 2423.61,
            "time": 1728123600000,
            "_internal_originalTime": 1728123600000
        },
        {
            "open": 2423.61,
            "high": 2423.61,
            "low": 2422.8,
            "close": 2423.05,
            "time": 1728123660000,
            "_internal_originalTime": 1728123660000
        },
        {
            "open": 2423.05,
            "high": 2423.46,
            "low": 2423.04,
            "close": 2423.21,
            "time": 1728123720000,
            "_internal_originalTime": 1728123720000
        },
        {
            "open": 2423.2,
            "high": 2423.2,
            "low": 2422.3,
            "close": 2422.31,
            "time": 1728123780000,
            "_internal_originalTime": 1728123780000
        },
        {
            "open": 2422.3,
            "high": 2422.83,
            "low": 2422.3,
            "close": 2422.71,
            "time": 1728123840000,
            "_internal_originalTime": 1728123840000
        },
        {
            "open": 2422.7,
            "high": 2422.75,
            "low": 2422.3,
            "close": 2422.75,
            "time": 1728123900000,
            "_internal_originalTime": 1728123900000
        },
        {
            "open": 2422.74,
            "high": 2423.34,
            "low": 2422.74,
            "close": 2423.07,
            "time": 1728123960000,
            "_internal_originalTime": 1728123960000
        },
        {
            "open": 2423.07,
            "high": 2423.07,
            "low": 2423.01,
            "close": 2423.01,
            "time": 1728124020000,
            "_internal_originalTime": 1728124020000
        },
        {
            "open": 2423.02,
            "high": 2423.25,
            "low": 2423.01,
            "close": 2423.25,
            "time": 1728124080000,
            "_internal_originalTime": 1728124080000
        },
        {
            "open": 2423.25,
            "high": 2423.66,
            "low": 2423.24,
            "close": 2423.65,
            "time": 1728124140000,
            "_internal_originalTime": 1728124140000
        },
        {
            "open": 2423.66,
            "high": 2424.28,
            "low": 2423.4,
            "close": 2423.65,
            "time": 1728124200000,
            "_internal_originalTime": 1728124200000
        },
        {
            "open": 2423.66,
            "high": 2423.66,
            "low": 2422.43,
            "close": 2422.44,
            "time": 1728124260000,
            "_internal_originalTime": 1728124260000
        },
        {
            "open": 2422.43,
            "high": 2422.44,
            "low": 2420.93,
            "close": 2420.94,
            "time": 1728124320000,
            "_internal_originalTime": 1728124320000
        },
        {
            "open": 2420.94,
            "high": 2422.44,
            "low": 2420.93,
            "close": 2422.2,
            "time": 1728124380000,
            "_internal_originalTime": 1728124380000
        },
        {
            "open": 2422.21,
            "high": 2422.21,
            "low": 2421.85,
            "close": 2421.85,
            "time": 1728124440000,
            "_internal_originalTime": 1728124440000
        },
        {
            "open": 2421.86,
            "high": 2421.86,
            "low": 2420.91,
            "close": 2420.91,
            "time": 1728124500000,
            "_internal_originalTime": 1728124500000
        },
        {
            "open": 2420.91,
            "high": 2421.72,
            "low": 2420.91,
            "close": 2421.69,
            "time": 1728124560000,
            "_internal_originalTime": 1728124560000
        },
        {
            "open": 2421.68,
            "high": 2422.43,
            "low": 2421.68,
            "close": 2422.35,
            "time": 1728124620000,
            "_internal_originalTime": 1728124620000
        },
        {
            "open": 2422.35,
            "high": 2423.2,
            "low": 2422.34,
            "close": 2423.19,
            "time": 1728124680000,
            "_internal_originalTime": 1728124680000
        },
        {
            "open": 2423.19,
            "high": 2423.2,
            "low": 2423.18,
            "close": 2423.19,
            "time": 1728124740000,
            "_internal_originalTime": 1728124740000
        },
        {
            "open": 2423.19,
            "high": 2423.19,
            "low": 2422.47,
            "close": 2422.48,
            "time": 1728124800000,
            "_internal_originalTime": 1728124800000
        },
        {
            "open": 2422.48,
            "high": 2423.1,
            "low": 2422.42,
            "close": 2423.09,
            "time": 1728124860000,
            "_internal_originalTime": 1728124860000
        },
        {
            "open": 2423.1,
            "high": 2423.1,
            "low": 2422.7,
            "close": 2422.7,
            "time": 1728124920000,
            "_internal_originalTime": 1728124920000
        },
        {
            "open": 2422.7,
            "high": 2422.7,
            "low": 2422.3,
            "close": 2422.39,
            "time": 1728124980000,
            "_internal_originalTime": 1728124980000
        },
        {
            "open": 2422.39,
            "high": 2423.26,
            "low": 2422.39,
            "close": 2423.01,
            "time": 1728125040000,
            "_internal_originalTime": 1728125040000
        },
        {
            "open": 2423.01,
            "high": 2423.69,
            "low": 2422.7,
            "close": 2423,
            "time": 1728125100000,
            "_internal_originalTime": 1728125100000
        },
        {
            "open": 2423.01,
            "high": 2423.2,
            "low": 2422.46,
            "close": 2423.2,
            "time": 1728125160000,
            "_internal_originalTime": 1728125160000
        },
        {
            "open": 2423.2,
            "high": 2423.66,
            "low": 2422.5,
            "close": 2422.5,
            "time": 1728125220000,
            "_internal_originalTime": 1728125220000
        },
        {
            "open": 2422.51,
            "high": 2422.51,
            "low": 2421,
            "close": 2421.01,
            "time": 1728125280000,
            "_internal_originalTime": 1728125280000
        },
        {
            "open": 2421.01,
            "high": 2421.12,
            "low": 2420.4,
            "close": 2420.47,
            "time": 1728125340000,
            "_internal_originalTime": 1728125340000
        },
        {
            "open": 2420.47,
            "high": 2420.88,
            "low": 2420.2,
            "close": 2420.87,
            "time": 1728125400000,
            "_internal_originalTime": 1728125400000
        },
        {
            "open": 2420.88,
            "high": 2420.88,
            "low": 2420.05,
            "close": 2420.06,
            "time": 1728125460000,
            "_internal_originalTime": 1728125460000
        },
        {
            "open": 2420.06,
            "high": 2420.06,
            "low": 2420.01,
            "close": 2420.01,
            "time": 1728125520000,
            "_internal_originalTime": 1728125520000
        },
        {
            "open": 2420.02,
            "high": 2420.02,
            "low": 2419.81,
            "close": 2419.82,
            "time": 1728125580000,
            "_internal_originalTime": 1728125580000
        },
        {
            "open": 2419.81,
            "high": 2419.98,
            "low": 2419.25,
            "close": 2419.25,
            "time": 1728125640000,
            "_internal_originalTime": 1728125640000
        },
        {
            "open": 2419.26,
            "high": 2419.4,
            "low": 2418.97,
            "close": 2419.25,
            "time": 1728125700000,
            "_internal_originalTime": 1728125700000
        },
        {
            "open": 2419.25,
            "high": 2419.26,
            "low": 2418.67,
            "close": 2419.23,
            "time": 1728125760000,
            "_internal_originalTime": 1728125760000
        },
        {
            "open": 2419.22,
            "high": 2419.22,
            "low": 2417.34,
            "close": 2417.34,
            "time": 1728125820000,
            "_internal_originalTime": 1728125820000
        },
        {
            "open": 2417.35,
            "high": 2418.44,
            "low": 2417.34,
            "close": 2418.44,
            "time": 1728125880000,
            "_internal_originalTime": 1728125880000
        },
        {
            "open": 2418.44,
            "high": 2419.23,
            "low": 2418.43,
            "close": 2419.22,
            "time": 1728125940000,
            "_internal_originalTime": 1728125940000
        },
        {
            "open": 2419.22,
            "high": 2419.4,
            "low": 2418.21,
            "close": 2418.34,
            "time": 1728126000000,
            "_internal_originalTime": 1728126000000
        },
        {
            "open": 2418.35,
            "high": 2418.6,
            "low": 2417.34,
            "close": 2418.59,
            "time": 1728126060000,
            "_internal_originalTime": 1728126060000
        },
        {
            "open": 2418.59,
            "high": 2419.3,
            "low": 2418.59,
            "close": 2419.3,
            "time": 1728126120000,
            "_internal_originalTime": 1728126120000
        },
        {
            "open": 2419.29,
            "high": 2420.68,
            "low": 2419.29,
            "close": 2420.68,
            "time": 1728126180000,
            "_internal_originalTime": 1728126180000
        },
        {
            "open": 2420.67,
            "high": 2420.91,
            "low": 2420.58,
            "close": 2420.9,
            "time": 1728126240000,
            "_internal_originalTime": 1728126240000
        },
        {
            "open": 2420.9,
            "high": 2420.9,
            "low": 2420.2,
            "close": 2420.21,
            "time": 1728126300000,
            "_internal_originalTime": 1728126300000
        },
        {
            "open": 2420.21,
            "high": 2420.31,
            "low": 2420.2,
            "close": 2420.31,
            "time": 1728126360000,
            "_internal_originalTime": 1728126360000
        },
        {
            "open": 2421.87,
            "high": 2422.12,
            "low": 2421.87,
            "close": 2422.11,
            "time": 1728126540000,
            "_internal_originalTime": 1728126540000
        },
        {
            "open": 2422.12,
            "high": 2422.25,
            "low": 2422.11,
            "close": 2422.24,
            "time": 1728126600000,
            "_internal_originalTime": 1728126600000
        },
        {
            "open": 2422.24,
            "high": 2422.25,
            "low": 2421.23,
            "close": 2421.24,
            "time": 1728126660000,
            "_internal_originalTime": 1728126660000
        },
        {
            "open": 2421.23,
            "high": 2421.23,
            "low": 2420.67,
            "close": 2420.93,
            "time": 1728126720000,
            "_internal_originalTime": 1728126720000
        },
        {
            "open": 2420.93,
            "high": 2421.22,
            "low": 2420.91,
            "close": 2421.22,
            "time": 1728126780000,
            "_internal_originalTime": 1728126780000
        },
        {
            "open": 2421.22,
            "high": 2421.51,
            "low": 2421.07,
            "close": 2421.08,
            "time": 1728126840000,
            "_internal_originalTime": 1728126840000
        },
        {
            "open": 2421.07,
            "high": 2421.08,
            "low": 2420,
            "close": 2420.01,
            "time": 1728126900000,
            "_internal_originalTime": 1728126900000
        },
        {
            "open": 2420,
            "high": 2420.01,
            "low": 2419.02,
            "close": 2419.77,
            "time": 1728126960000,
            "_internal_originalTime": 1728126960000
        },
        {
            "open": 2419.77,
            "high": 2419.77,
            "low": 2418.65,
            "close": 2418.66,
            "time": 1728127020000,
            "_internal_originalTime": 1728127020000
        },
        {
            "open": 2418.65,
            "high": 2418.65,
            "low": 2417.75,
            "close": 2417.76,
            "time": 1728127080000,
            "_internal_originalTime": 1728127080000
        },
        {
            "open": 2417.76,
            "high": 2417.76,
            "low": 2417.25,
            "close": 2417.61,
            "time": 1728127140000,
            "_internal_originalTime": 1728127140000
        },
        {
            "open": 2417.62,
            "high": 2418.47,
            "low": 2417.62,
            "close": 2418.12,
            "time": 1728127200000,
            "_internal_originalTime": 1728127200000
        },
        {
            "open": 2418.13,
            "high": 2418.66,
            "low": 2418.13,
            "close": 2418.37,
            "time": 1728127260000,
            "_internal_originalTime": 1728127260000
        },
        {
            "open": 2418.37,
            "high": 2418.66,
            "low": 2418.21,
            "close": 2418.53,
            "time": 1728127320000,
            "_internal_originalTime": 1728127320000
        },
        {
            "open": 2418.53,
            "high": 2418.54,
            "low": 2417.88,
            "close": 2417.9,
            "time": 1728127380000,
            "_internal_originalTime": 1728127380000
        },
        {
            "open": 2417.91,
            "high": 2418.58,
            "low": 2417.52,
            "close": 2418.58,
            "time": 1728127440000,
            "_internal_originalTime": 1728127440000
        },
        {
            "open": 2418.57,
            "high": 2418.58,
            "low": 2418.57,
            "close": 2418.57,
            "time": 1728127500000,
            "_internal_originalTime": 1728127500000
        },
        {
            "open": 2418.57,
            "high": 2418.58,
            "low": 2417.8,
            "close": 2417.81,
            "time": 1728127560000,
            "_internal_originalTime": 1728127560000
        },
        {
            "open": 2417.8,
            "high": 2418.26,
            "low": 2417.8,
            "close": 2418.25,
            "time": 1728127620000,
            "_internal_originalTime": 1728127620000
        },
        {
            "open": 2418.25,
            "high": 2418.33,
            "low": 2418.17,
            "close": 2418.32,
            "time": 1728127680000,
            "_internal_originalTime": 1728127680000
        },
        {
            "open": 2418.32,
            "high": 2418.32,
            "low": 2417.9,
            "close": 2417.9,
            "time": 1728127740000,
            "_internal_originalTime": 1728127740000
        },
        {
            "open": 2417.9,
            "high": 2418.11,
            "low": 2417.44,
            "close": 2417.53,
            "time": 1728127800000,
            "_internal_originalTime": 1728127800000
        },
        {
            "open": 2417.53,
            "high": 2417.94,
            "low": 2417.53,
            "close": 2417.63,
            "time": 1728127860000,
            "_internal_originalTime": 1728127860000
        },
        {
            "open": 2417.63,
            "high": 2418.2,
            "low": 2417.46,
            "close": 2418.2,
            "time": 1728127920000,
            "_internal_originalTime": 1728127920000
        },
        {
            "open": 2418.2,
            "high": 2418.5,
            "low": 2418.19,
            "close": 2418.49,
            "time": 1728127980000,
            "_internal_originalTime": 1728127980000
        },
        {
            "open": 2418.49,
            "high": 2418.5,
            "low": 2418.49,
            "close": 2418.5,
            "time": 1728128040000,
            "_internal_originalTime": 1728128040000
        },
        {
            "open": 2418.5,
            "high": 2418.62,
            "low": 2418.49,
            "close": 2418.51,
            "time": 1728128100000,
            "_internal_originalTime": 1728128100000
        },
        {
            "open": 2418.51,
            "high": 2418.87,
            "low": 2417.95,
            "close": 2418.87,
            "time": 1728128160000,
            "_internal_originalTime": 1728128160000
        },
        {
            "open": 2418.87,
            "high": 2419.3,
            "low": 2418.86,
            "close": 2419.3,
            "time": 1728128220000,
            "_internal_originalTime": 1728128220000
        },
        {
            "open": 2419.3,
            "high": 2419.5,
            "low": 2418.35,
            "close": 2418.36,
            "time": 1728128280000,
            "_internal_originalTime": 1728128280000
        },
        {
            "open": 2418.36,
            "high": 2418.36,
            "low": 2417.86,
            "close": 2417.86,
            "time": 1728128340000,
            "_internal_originalTime": 1728128340000
        },
        {
            "open": 2417.87,
            "high": 2417.87,
            "low": 2417.69,
            "close": 2417.69,
            "time": 1728128400000,
            "_internal_originalTime": 1728128400000
        },
        {
            "open": 2417.69,
            "high": 2417.7,
            "low": 2417.35,
            "close": 2417.35,
            "time": 1728128460000,
            "_internal_originalTime": 1728128460000
        },
        {
            "open": 2417.36,
            "high": 2418,
            "low": 2417.35,
            "close": 2418,
            "time": 1728128520000,
            "_internal_originalTime": 1728128520000
        },
        {
            "open": 2418,
            "high": 2418,
            "low": 2417.45,
            "close": 2417.46,
            "time": 1728128580000,
            "_internal_originalTime": 1728128580000
        },
        {
            "open": 2417.46,
            "high": 2417.46,
            "low": 2417.45,
            "close": 2417.45,
            "time": 1728128640000,
            "_internal_originalTime": 1728128640000
        },
        {
            "open": 2417.46,
            "high": 2417.46,
            "low": 2417.44,
            "close": 2417.45,
            "time": 1728128700000,
            "_internal_originalTime": 1728128700000
        },
        {
            "open": 2417.44,
            "high": 2417.45,
            "low": 2417.36,
            "close": 2417.37,
            "time": 1728128760000,
            "_internal_originalTime": 1728128760000
        },
        {
            "open": 2417.36,
            "high": 2417.46,
            "low": 2417.36,
            "close": 2417.46,
            "time": 1728128820000,
            "_internal_originalTime": 1728128820000
        },
        {
            "open": 2417.46,
            "high": 2417.6,
            "low": 2417.46,
            "close": 2417.6,
            "time": 1728128880000,
            "_internal_originalTime": 1728128880000
        },
        {
            "open": 2417.59,
            "high": 2417.6,
            "low": 2417.59,
            "close": 2417.6,
            "time": 1728128940000,
            "_internal_originalTime": 1728128940000
        },
        {
            "open": 2417.6,
            "high": 2417.6,
            "low": 2417.59,
            "close": 2417.59,
            "time": 1728129000000,
            "_internal_originalTime": 1728129000000
        },
        {
            "open": 2417.59,
            "high": 2417.59,
            "low": 2417.17,
            "close": 2417.18,
            "time": 1728129060000,
            "_internal_originalTime": 1728129060000
        },
        {
            "open": 2417.17,
            "high": 2417.89,
            "low": 2417.17,
            "close": 2417.76,
            "time": 1728129120000,
            "_internal_originalTime": 1728129120000
        },
        {
            "open": 2417.76,
            "high": 2418,
            "low": 2417.75,
            "close": 2417.98,
            "time": 1728129180000,
            "_internal_originalTime": 1728129180000
        },
        {
            "open": 2417.98,
            "high": 2418.14,
            "low": 2417.35,
            "close": 2418.13,
            "time": 1728129240000,
            "_internal_originalTime": 1728129240000
        },
        {
            "open": 2418.13,
            "high": 2418.14,
            "low": 2418.13,
            "close": 2418.14,
            "time": 1728129300000,
            "_internal_originalTime": 1728129300000
        },
        {
            "open": 2418.14,
            "high": 2418.14,
            "low": 2417.28,
            "close": 2417.29,
            "time": 1728129360000,
            "_internal_originalTime": 1728129360000
        },
        {
            "open": 2417.29,
            "high": 2417.7,
            "low": 2417.28,
            "close": 2417.38,
            "time": 1728129420000,
            "_internal_originalTime": 1728129420000
        },
        {
            "open": 2417.38,
            "high": 2417.39,
            "low": 2416.63,
            "close": 2417,
            "time": 1728129480000,
            "_internal_originalTime": 1728129480000
        },
        {
            "open": 2417,
            "high": 2417.2,
            "low": 2416.99,
            "close": 2417.19,
            "time": 1728129540000,
            "_internal_originalTime": 1728129540000
        },
        {
            "open": 2417.19,
            "high": 2418.71,
            "low": 2417.19,
            "close": 2418.71,
            "time": 1728129600000,
            "_internal_originalTime": 1728129600000
        },
        {
            "open": 2418.71,
            "high": 2419.78,
            "low": 2418.7,
            "close": 2419.32,
            "time": 1728129660000,
            "_internal_originalTime": 1728129660000
        },
        {
            "open": 2419.32,
            "high": 2419.77,
            "low": 2419.32,
            "close": 2419.76,
            "time": 1728129720000,
            "_internal_originalTime": 1728129720000
        },
        {
            "open": 2419.76,
            "high": 2419.77,
            "low": 2419.76,
            "close": 2419.76,
            "time": 1728129780000,
            "_internal_originalTime": 1728129780000
        },
        {
            "open": 2419.76,
            "high": 2420.4,
            "low": 2419.76,
            "close": 2420.35,
            "time": 1728129840000,
            "_internal_originalTime": 1728129840000
        },
        {
            "open": 2420.34,
            "high": 2420.8,
            "low": 2420.34,
            "close": 2420.79,
            "time": 1728129900000,
            "_internal_originalTime": 1728129900000
        },
        {
            "open": 2420.8,
            "high": 2420.8,
            "low": 2420.79,
            "close": 2420.79,
            "time": 1728129960000,
            "_internal_originalTime": 1728129960000
        },
        {
            "open": 2420.79,
            "high": 2420.8,
            "low": 2420.79,
            "close": 2420.8,
            "time": 1728130020000,
            "_internal_originalTime": 1728130020000
        },
        {
            "open": 2420.8,
            "high": 2421,
            "low": 2420.28,
            "close": 2420.29,
            "time": 1728130080000,
            "_internal_originalTime": 1728130080000
        },
        {
            "open": 2420.28,
            "high": 2420.29,
            "low": 2418.48,
            "close": 2418.49,
            "time": 1728130140000,
            "_internal_originalTime": 1728130140000
        },
        {
            "open": 2418.49,
            "high": 2419.2,
            "low": 2418.48,
            "close": 2418.78,
            "time": 1728130200000,
            "_internal_originalTime": 1728130200000
        },
        {
            "open": 2418.79,
            "high": 2419.53,
            "low": 2418.78,
            "close": 2419.52,
            "time": 1728130260000,
            "_internal_originalTime": 1728130260000
        },
        {
            "open": 2419.53,
            "high": 2419.53,
            "low": 2419.52,
            "close": 2419.52,
            "time": 1728130320000,
            "_internal_originalTime": 1728130320000
        },
        {
            "open": 2419.53,
            "high": 2419.53,
            "low": 2419.12,
            "close": 2419.12,
            "time": 1728130380000,
            "_internal_originalTime": 1728130380000
        },
        {
            "open": 2419.13,
            "high": 2419.2,
            "low": 2418.34,
            "close": 2418.34,
            "time": 1728130440000,
            "_internal_originalTime": 1728130440000
        },
        {
            "open": 2418.34,
            "high": 2419.2,
            "low": 2417.78,
            "close": 2417.78,
            "time": 1728130500000,
            "_internal_originalTime": 1728130500000
        },
        {
            "open": 2417.78,
            "high": 2418.2,
            "low": 2417.78,
            "close": 2418.2,
            "time": 1728130560000,
            "_internal_originalTime": 1728130560000
        },
        {
            "open": 2418.19,
            "high": 2418.2,
            "low": 2417.28,
            "close": 2417.29,
            "time": 1728130620000,
            "_internal_originalTime": 1728130620000
        },
        {
            "open": 2417.29,
            "high": 2417.76,
            "low": 2417.29,
            "close": 2417.49,
            "time": 1728130680000,
            "_internal_originalTime": 1728130680000
        },
        {
            "open": 2417.49,
            "high": 2418.87,
            "low": 2417.07,
            "close": 2418.87,
            "time": 1728130740000,
            "_internal_originalTime": 1728130740000
        },
        {
            "open": 2418.87,
            "high": 2419.53,
            "low": 2418.86,
            "close": 2419.53,
            "time": 1728130800000,
            "_internal_originalTime": 1728130800000
        },
        {
            "open": 2419.53,
            "high": 2419.53,
            "low": 2418.96,
            "close": 2418.97,
            "time": 1728130860000,
            "_internal_originalTime": 1728130860000
        },
        {
            "open": 2418.97,
            "high": 2418.97,
            "low": 2418.57,
            "close": 2418.58,
            "time": 1728130920000,
            "_internal_originalTime": 1728130920000
        },
        {
            "open": 2418.58,
            "high": 2419.3,
            "low": 2418.58,
            "close": 2419.3,
            "time": 1728130980000,
            "_internal_originalTime": 1728130980000
        },
        {
            "open": 2419.3,
            "high": 2419.3,
            "low": 2417.81,
            "close": 2417.82,
            "time": 1728131040000,
            "_internal_originalTime": 1728131040000
        },
        {
            "open": 2417.82,
            "high": 2418.22,
            "low": 2417.82,
            "close": 2418.21,
            "time": 1728131100000,
            "_internal_originalTime": 1728131100000
        },
        {
            "open": 2418.21,
            "high": 2418.33,
            "low": 2418.21,
            "close": 2418.33,
            "time": 1728131160000,
            "_internal_originalTime": 1728131160000
        },
        {
            "open": 2418.32,
            "high": 2419.49,
            "low": 2418.32,
            "close": 2419.12,
            "time": 1728131220000,
            "_internal_originalTime": 1728131220000
        },
        {
            "open": 2419.12,
            "high": 2419.12,
            "low": 2418.71,
            "close": 2418.96,
            "time": 1728131280000,
            "_internal_originalTime": 1728131280000
        },
        {
            "open": 2418.96,
            "high": 2419.19,
            "low": 2418.95,
            "close": 2418.96,
            "time": 1728131340000,
            "_internal_originalTime": 1728131340000
        },
        {
            "open": 2418.97,
            "high": 2419.86,
            "low": 2418.96,
            "close": 2419.86,
            "time": 1728131400000,
            "_internal_originalTime": 1728131400000
        },
        {
            "open": 2419.85,
            "high": 2420.68,
            "low": 2419.33,
            "close": 2420.67,
            "time": 1728131460000,
            "_internal_originalTime": 1728131460000
        },
        {
            "open": 2420.68,
            "high": 2420.68,
            "low": 2420.2,
            "close": 2420.6,
            "time": 1728131520000,
            "_internal_originalTime": 1728131520000
        },
        {
            "open": 2420.6,
            "high": 2420.97,
            "low": 2420.6,
            "close": 2420.87,
            "time": 1728131580000,
            "_internal_originalTime": 1728131580000
        },
        {
            "open": 2420.86,
            "high": 2421.4,
            "low": 2420.76,
            "close": 2421.39,
            "time": 1728131640000,
            "_internal_originalTime": 1728131640000
        },
        {
            "open": 2421.4,
            "high": 2421.46,
            "low": 2421.13,
            "close": 2421.46,
            "time": 1728131700000,
            "_internal_originalTime": 1728131700000
        },
        {
            "open": 2421.46,
            "high": 2421.46,
            "low": 2420.82,
            "close": 2420.82,
            "time": 1728131760000,
            "_internal_originalTime": 1728131760000
        },
        {
            "open": 2420.83,
            "high": 2420.83,
            "low": 2420.01,
            "close": 2420.01,
            "time": 1728131820000,
            "_internal_originalTime": 1728131820000
        },
        {
            "open": 2420.02,
            "high": 2420.39,
            "low": 2419.52,
            "close": 2420.38,
            "time": 1728131880000,
            "_internal_originalTime": 1728131880000
        },
        {
            "open": 2420.38,
            "high": 2420.39,
            "low": 2420.38,
            "close": 2420.38,
            "time": 1728131940000,
            "_internal_originalTime": 1728131940000
        }
    ]
    useEffect(() => {
        const chart = createChart(chartContainerRef.current, {
            width: 1000,
            height: 600,
            layout: {
                backgroundColor: '#444',
                textColor: '#000',
            },
            grid: {
                vertLines: {
                    color: 'rgba(197, 203, 206, 0.5)',
                },
                horzLines: {
                    color: 'rgba(197, 203, 206, 0.5)',
                },
            },
            crosshair: {
                mode: CrosshairMode.Normal,
            },
            timeScale: {
                timeVisible: true,
                secondsVisible: true,
            },
        });

        const Series = chart.addCandlestickSeries({
            upColor: '#26a69a',
            downColor: '#ef5350',
            borderDownColor: '#ef5350',
            borderColor: '#26a69a',
            wickDownColor: '#26a69a',
            wickUpColor: '#ef5350',
        });

        Series.setData(newData);
        chart.timeScale().fitContent();
        
        return () => {
            chart.remove();
        };
    }, []);


    return (
        <div className="flex flex-row w-full h-svh text-white">
            <div className="w-1/12 h-full bg-gray-700 flex flex-col gap-4 p-2">
                

            </div>

            <div className="w-11/12 h-full bg-gray-800">
                <div className="mixed-chart p-2 h-5/6">
                    <div
                        ref={chartContainerRef}
                    />
                    {/* <button className="inline-block px-6 py-2 duration-200 bg-gray-300 hover:bg-gray-600 rounded-lg" onClick={() => chart.timeScale().scrollToRealTime()}>
                        Go to realtime
                    </button> */}
                </div>
            </div>
        </div>
    );
}

export default Test