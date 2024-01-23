import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../Homelayout";
import App from "../App";
import SIgnup from "../Signup/SIgnup";

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
      ]
    },
  ]);


  export default router