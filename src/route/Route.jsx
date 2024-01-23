import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../Homelayout";
import App from "../App";
import SIgnup from "../Signup/SIgnup";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Homelayout/>,
      children:[
        {
            path:'/',
            element:<App></App>
        },
        {
            path:'/signup',
            element:<SIgnup></SIgnup>
        },
        {
            path:'/login',
            element:<Login/>
        },
      ]
    },

    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
      children:[


        
      ]
    }
  ]);


  export default router