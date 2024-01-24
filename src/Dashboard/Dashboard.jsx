import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import getOwner from '../Hooks/getOwner';
import { HouseContext } from '../Context/ContextHouse';

const Dashboard = () => {
  const [isOwner] = getOwner()
  let {user}= useContext(HouseContext)
  console.log(isOwner);
  
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet />
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">

            <li><Link to={'/'}>Home</Link></li>
            {user && isOwner ? <li>
              <Link to={'hlist'}>House LIst</Link>
            </li>
              : <li>
                <Link to={'bookings'}>bookings</Link>
              </li>
            }
            <li>
                <a>{user}</a>
              </li>
            
          </ul>
        
        </div>
      </div>
    </div> 
  );
};

export default Dashboard;