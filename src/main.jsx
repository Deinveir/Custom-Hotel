import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from "./pages/Error-Page.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Venues from './pages/Venues.jsx';
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/venues",
    element: <Venues/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/functions",
    element: <div className='heading-h1'>Functions</div>,
    errorElement: <ErrorPage />
  },
  {
    path: "/whats-on",
    element: <div className='heading-h1'>What&apos;s On</div>,
    errorElement: <ErrorPage />
  },
  {
    path: "/contact",
    element: <div className='heading-h1'>Contact</div>,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
