import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../Homelayout";
import App from "../App";
import SIgnup from "../Signup/SIgnup";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import HouseList from "../Dashboard/HouseOwner/HouseList/HouseList";
import Mybooking from "../Dashboard/HouseRenter/Mybooking";
import Protecte from "./Protecte";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    children: [
      {
        path: '/',
        element: <App></App>
      },
      {
        path: '/signup',
        element: <SIgnup></SIgnup>
      },
      {
        path: '/login',
        element: <Login />
      },
    ]
  },

  {
    path: '/dashboard',
  element: <Protecte> <Dashboard></Dashboard> </Protecte>,
    children: [
      {
        path: 'hlist',
        element: <HouseList></HouseList>
      },
      {
        path: 'bookings',
        element: <Mybooking/>
      },


    ]
  }
]);


export default router