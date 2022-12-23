import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../styles/Staffnavbar.css';

const Studentnavbar = () => {
let student_token1=sessionStorage.getItem("student_token");
let student_token2=useSelector(state=>state.student.login.student_token);
  return (
    <div className='staffnav-wrapper'>
        <div className='staffnav-menu'>
        {(student_token1||student_token2)?(<>
        <ul>
                <NavLink to="/student/profile" className={({ isActive }) => (isActive ? 'menulinks-active' : 'menulinks')}>Profile</NavLink>
        </ul>
        <ul>
                <NavLink to="/student/subscriptions" className={({ isActive }) => (isActive ? 'menulinks-active' : 'menulinks')}>Subscriptions</NavLink>
        </ul>
        <ul>
                <NavLink to="/student/courses" className={({ isActive }) => (isActive ? 'menulinks-active' : 'menulinks')}>Courses</NavLink>
        </ul>
        </>):
        (<>
        <ul>
                <NavLink to="/student/login"  className={({ isActive }) => (isActive ? 'menulinks-active' : 'menulinks')}>Login</NavLink>
        </ul>
        <ul>
                <NavLink to="/student/register" className={({ isActive }) => (isActive ? 'menulinks-active' : 'menulinks')}>Register</NavLink>
        </ul>
        </>)}

        </div>
    </div>
  )
}

export default Studentnavbar