import React from 'react'
import './styles/Navbar.css'

import{NavLink}from "react-router-dom";
import { useSelector } from 'react-redux';

const Navbar = () => {
  let staff_token1=sessionStorage.getItem("staff_token");
  let staff_token2=useSelector(state=>state.staff.login.staff_token);

  let student_token1=sessionStorage.getItem("student_token");
  let student_token2=useSelector(state=>state.student.login.student_token);
  
  return (
    <div className='nav-wrapper'>
     <NavLink to="/" className="navbar-logo"><img src={""} alt="" style={{height:"3vw"}} /></NavLink>
     <div className='menu'>
       {(!staff_token1&&!staff_token2)&&(!student_token1&&!student_token2) ?(<>
        <ul>
          <NavLink to="/staff" className={({ isActive }) => (isActive ? 'menulinks-active' : 'menulinks')}>Admin</NavLink>
        </ul>
         <ul>
         <NavLink to="/student" className={({ isActive }) => (isActive ? 'menulinks-active' : 'menulinks')}>Student</NavLink>
       </ul>
       </>
        ):
       (<>
       {(!staff_token1&&!staff_token2)?(
        <ul>
            <NavLink to="/student" className={({ isActive }) => (isActive ? 'menulinks-active' : 'menulinks')}>Student</NavLink>
        </ul>
        ):(<>
        {(!student_token1&&!student_token2)? (
          <ul>
          <NavLink to="/staff" className={({ isActive }) => (isActive ? 'menulinks-active' : 'menulinks')}>Admin</NavLink>
        </ul>
        ):(<></>)}
        </>)}
       </>)}
        </div>
    </div>
  )
}

export default Navbar