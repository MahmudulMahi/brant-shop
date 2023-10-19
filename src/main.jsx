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
import Totalproducts from './components/totalproducts/Totalproducts';

import UpdateProduct1 from './components/update1/UpdateProduct1';
import Shoes from './components/shoes/Shoes';






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
        element:<Addproduct></Addproduct>
      },
      {
        path:'/mycart',
        element:<PrivateRoute><Mycart></Mycart></PrivateRoute>
      },
      {
        path:'/totalproducts',
        element:<Totalproducts></Totalproducts>,
        loader:()=>fetch('http://localhost:5000/products')
      },
      {
        path:'/updateproduct/:id',
        element:<UpdateProduct1></UpdateProduct1>,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path:'/shoes',
        element:<Shoes></Shoes>
      }
     
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
