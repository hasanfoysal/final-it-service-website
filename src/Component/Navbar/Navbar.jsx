import {  Link, NavLink } from "react-router-dom";

import img from '../../assets/WhatsApp Image 2024-09-15 at 12.05.06_31ee0d99.jpg'

const Navbar = () => {
  const nav = <>
   <NavLink to='/'><li className="text-l hover:text-orange-600 lg:text-white"><a>Home</a></li></NavLink>
   <NavLink to='/about'><li  className="text-l hover:text-orange-600 lg:text-white"><a>About</a></li></NavLink>
   <NavLink to='/services'><li  className="text-l hover:text-orange-600 lg:text-white"><a>Services</a></li></NavLink>
   <NavLink to='/blog'><li  className="text-l hover:text-orange-600  lg:text-white"><a>Blog</a></li></NavLink>
   <NavLink to='/members'><li  className="text-l hover:text-orange-600 lg:text-white"><a>Members</a></li></NavLink>  
   <NavLink to='/contact'><li  className="text-l hover:text-orange-600 lg:text-white"><a>Contact</a></li></NavLink>
   <NavLink to='/dashboard'><li  className="text-l hover:text-orange-600 lg:text-white"><a>Dashboard</a></li></NavLink>    
   <Link to='/login'><h1 className="bg-orange-600 shadow-sm   shadow-white hover:text-black hover:shadow-black  p-2 px-3 text-white font-semibold rounded-full">Login</h1></Link>

  
  </>
 
    return (
        <div>
            <div className="navbar text-cyan-50 absolute bg-opacity-70 z-10 bg-black ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {nav}
      </ul>
    </div>
    <img className="w-52 h-12 lg:pl-28 md:pl-16 rounded-xl font-bold" src={img} alt="" />
  </div>
  
  <div className="navbar-end lg:pr-24">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {nav}
    </ul>
  </div>
  </div>
</div>

        </div>
    );
};

export default Navbar;