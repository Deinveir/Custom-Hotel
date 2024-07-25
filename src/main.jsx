import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from "./pages/Error-Page.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Venues from './pages/Venues.jsx';
import Home from './pages/Home.jsx';
import Sportsbar from './pages/Sportsbar.jsx'
import Inna_Lounge from './pages/Inna_Lounge.jsx'
import Taylors_Rooftop from './pages/Taylors_Rooftop.jsx'
import Functions from './pages/Functions.jsx';
import Whats_On from './pages/Whats_On.jsx';

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
    path: "/venues/sportsbar",
    element: <Sportsbar/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/venues/inna-lounge",
    element: <Inna_Lounge/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/venues/taylors-rooftop",
    element: <Taylors_Rooftop/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/functions",
    element: <Functions/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/whats-on",
    element: <Whats_On/>,
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
