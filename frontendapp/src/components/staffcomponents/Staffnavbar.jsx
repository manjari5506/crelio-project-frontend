import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';
import '../styles/Staffnavbar.css';

const Doctornavbar = () => {
let staff_token1=sessionStorage.getItem("staff_token");
let staff_token2=useSelector(state=>state.staff.login.staff_token);
  return (
    <div className='staffnav-wrapper'>
        
        <div className='staffnav-menu'>
        {(staff_token1||staff_token2)?(<>
        <ul>
             <NavLink to="/staff/profile"  className={({ isActive }) => (isActive ? 'menulinks-active' : 'menulinks')}>Profile</NavLink>
        </ul>
        <ul>
             <NavLink to="/staff/add-course" className={({ isActive }) => (isActive ? 'menulinks-active' : 'menulinks')}>Add Course</NavLink>
        </ul>
        <ul>
             <NavLink to="/staff/students" className={({ isActive }) => (isActive ? 'menulinks-active' : 'menulinks')}>Students</NavLink>
        </ul>
        <ul>
             <NavLink to="/staff/courses" className={({ isActive }) => (isActive ? 'menulinks-active' : 'menulinks')}>Courses</NavLink>
        </ul>
        </>):
        (<>
        <ul>
                <NavLink to="/staff/login"  className={({ isActive }) => (isActive ? 'menulinks-active' : 'menulinks')}>Login</NavLink>
        </ul>
        <ul>
                <NavLink to="/staff/register" className={({ isActive }) => (isActive ? 'menulinks-active' : 'menulinks')}>Register</NavLink>
        </ul>
        </>)}
       
        </div>
    </div>
  )
}

export default Doctornavbar