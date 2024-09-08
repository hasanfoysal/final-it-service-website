import {  Link, NavLink } from "react-router-dom";



const Navbar = () => {
  const nav = <>
   <NavLink to='/'><li className="text-l hover:text-orange-600 lg:text-white"><a>Home</a></li></NavLink>
   <NavLink to='/services'><li  className="text-l hover:text-orange-600 lg:text-white"><a>Services</a></li></NavLink>
   <NavLink to='/about'><li  className="text-l hover:text-orange-600 lg:text-white"><a>About</a></li></NavLink>
   <NavLink to='/blog'><li  className="text-l hover:text-orange-600  lg:text-white"><a>Blog</a></li></NavLink>
   <NavLink to='/members'><li  className="text-l hover:text-orange-600 lg:text-white"><a>Members</a></li></NavLink>  
   <NavLink to='/contact'><li  className="text-l hover:text-orange-600 lg:text-white"><a>Contact</a></li></NavLink>  
  
  </>
 
    return (
        <div>
            <div className="navbar text-cyan-50 absolute bg-opacity-30 z-10 bg-black ">
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
        className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {nav}
      </ul>
    </div>
    <h1 className="btn btn-ghost lg:text-3xl text-2xl  lg:pl-24 text-white font-bold">LM <span className="text-4xl text-orange-600 font-extrabold">GROUP.</span></h1>
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