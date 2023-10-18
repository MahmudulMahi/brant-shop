import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layouts/Root.jsx';
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import AuthProvider from './providers/AuthProvider';
import Details from './pages/home/details/Details';
import PrivateRoute from './providers/PrivateRoute/PrivateRoute';

import Notfound from './pages/notfount/Notfound';
import Addproduct from './pages/addproduct/Addproduct';
import Mycart from './pages/mycart/Mycart';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Notfound></Notfound>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/event.json')
      },
      {
        path:'/event/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader:()=>fetch('../event.json')
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/addproduct',
        element:<PrivateRoute><Addproduct></Addproduct></PrivateRoute>
      },
      {
        path:'/mycart',
        element:<PrivateRoute><Mycart></Mycart></PrivateRoute>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
