import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
      <li>
        <Link to={'/signup'}>Signup</Link>
      </li>
     
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;