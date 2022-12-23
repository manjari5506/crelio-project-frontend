import React, { useEffect } from 'react'
import Staffnavbar from "./Staffnavbar"
import '../styles/Profile.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { profileError, profileLoading, profileSuccess, staffLogout } from '../../redux/staff/Actions';
import axios from 'axios';

const Staffportal = () => {
const token=JSON.parse(sessionStorage.staff_token);
const navigate = useNavigate();
let dispatch=useDispatch();

const {data}=useSelector(state=>state.staff.profile)

let logout=()=>{
sessionStorage.removeItem("staff_token");
sessionStorage.removeItem("staffid");
dispatch(staffLogout());
navigate('/');
}

let getuser=()=>{
dispatch(profileLoading())
  axios({
    method: "post",
    url: 'http://localhost:8000/staff/loggedinstaff/',
    data:{
      Email:token.Email,
      Password:token.Password
      }
}).then((response)=>{
  sessionStorage.setItem("staffid",JSON.stringify(response.data))
  dispatch(profileSuccess(response.data));
}).catch((error)=>{
  dispatch(profileError());
  let errmessage=error.response.data.Email;
  alert("Error :"+errmessage);
})
}
useEffect(()=>{
  getuser();
},[])

  return (
    <>
       <Staffnavbar/>
       {data.map((el) => (<>
       <div className='profile-wrapper'>
       <h3 style={{color:"rgb(4,4,170)", textAlign:"center",fontSize:"2vw",padding:'0px',margin:'0px',fontWeight:"500"}}>Profile</h3>
          <div className='profile-main'>
          <div className="profile">
          <p className='profile-label'>Name</p>

          <p className='profile-label'>Email</p>

          <p className='profile-label'>Staff ID</p>

          </div>
          <div className="profile2">

          <p className='profile-info'>{el.Name}</p>

          <p className='profile-info'>{el.Email}</p>

          <p className='profile-info'>{el.Staff_id}</p>


          </div>
          </div>
        <div style={{width:"fit-content",marginRight:"0px",marginLeft:"auto"}}>
        <button className='profile-button' disabled>Edit</button>
        <button className='profile-button' onClick={logout}>Log Out</button>
        </div>
       </div>
    </>
    ))}
 </> )
}

export default Staffportal