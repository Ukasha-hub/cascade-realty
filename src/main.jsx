import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root';
import Home from './Home';
import Details from './Details';
import SignIn from './SignIn';
import Register from './Register';
import AuthProvider from './AuthProvider';
import PrivateRoute from './PrivateRoute';
import UpdateProfile from './UpdateProfile';
import About from './About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ()=> fetch('/residence.json')
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
        
      },
      {
        path: '/register',
        element: <Register></Register>
        
      },
      {
        path: '/updateProfile',
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        
      },
      {
        path: '/about',
        element: <PrivateRoute><About></About></PrivateRoute>
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
     <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
