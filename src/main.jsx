import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Dashboard from './pages/Dashboard.jsx';
import Test from './pages/test.jsx';
import store from './store/store.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Dashboard/>
      },
      {
        path: "/test",
        element: <Test/>
      }

    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      
        <RouterProvider router={router}/>
      
    </Provider>
  </StrictMode>,
)