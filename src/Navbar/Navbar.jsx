import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const isToken = !!localStorage.getItem('house-token')
  let navigate = useNavigate()
  const handlelogOut = () => {
    localStorage.removeItem('house-token')
    navigate('/login')
  }
  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            {isToken ? <>
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