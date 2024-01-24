import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HouseContext } from '../Context/ContextHouse';

const Navbar = () => {
  const isToken = !!localStorage.getItem('house-token')
  let {user}= useContext(HouseContext)
  let navigate = useNavigate()
  const handlelogOut = () => {
    localStorage.removeItem('house-token')
    navigate('/login')
  }

  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">House Hunter</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            {isToken ? <>
              <li>
                <Link to={'/dashboard'}>Dashboard</Link>
              </li>
              <li>
                <a>{user}</a>
              </li>
              <li>
                <a onClick={handlelogOut}> Log Out</a>
              </li>
            </> : <>

              <li>
                <Link to={'/login'}>Login</Link>
              </li></>}

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;