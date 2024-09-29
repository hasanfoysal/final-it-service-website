import {  FaNewspaper,FaUser, FaUsers, FaWpforms } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    
    return (
        <div className="flex pt-24 lg:p-32">
        
            <div className="lg:w-64 md:w-52 min-h-screen w-44 border border-black bg-orange-400"> <ul className="menu">
                
                   
                    
                    <li><NavLink to='/dashboard/dashboard2'>
                <FaUsers></FaUsers>
                Dashboard</NavLink></li>
                <li>
                        <NavLink to='/dashboard/applications'>
                        <FaWpforms></FaWpforms>
                        Applications</NavLink>
                    </li>
                <li><NavLink to='/dashboard/candidate'>
                <FaUser></FaUser>
                Candidate</NavLink></li>
                <li><NavLink to='/dashboard/admins'>
                <FaUsers></FaUsers>
                Admins</NavLink></li>
                <li><NavLink to='/dashboard/news'>
                <FaNewspaper></FaNewspaper>
                News</NavLink></li>
            </ul></div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;