import React, { useEffect } from 'react'
import Studentnavbar from './Studentnavbar'
import '../styles/Profile.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { profileError, profileLoading, profileSuccess, studentLogout } from '../../redux/student/Actions';
import axios from 'axios';

const StudentPortal = () => {
const token=JSON.parse(sessionStorage.student_token);
const navigate = useNavigate();
let dispatch=useDispatch();
const {data}=useSelector(state=>state.student.profile)

let logout=()=>{
  sessionStorage.removeItem("student_token");
  dispatch(studentLogout());
  navigate('/');
  }

  let getuser=()=>{
    dispatch(profileLoading())
    //console.log(token,data);
      axios({
        method: "post",
        url: 'http://localhost:8000/std/loggedinstudent/',
        data:{
          Email:token.email,
          Password:token.password
          }
    }).then((response)=>{
      dispatch(profileSuccess(response.data));
    }).catch((error)=>{
      dispatch(profileError());
      let errmessage=error.response.data.email;
      alert("Error :"+errmessage);
    })
    }
    useEffect(()=>{
      getuser();
    },[])

  return (
    <>
        <Studentnavbar/>
      {data.map((el) => (<>
       <div className='profile-wrapper' key={el.student_id}>
       <h3 style={{color:"rgb(4,4,170)", textAlign:"center",fontSize:"2vw",padding:'0px',margin:'0px',fontWeight:"500"}}>Profile</h3>
          <div className='profile-main'>
          <div className="profile">
          <p className='profile-label'>Name</p>

          <p className='profile-label'>Email</p>

          <p className='profile-label'>Student ID</p>

          {/* <p className='profile-label'>Field_of_study</p> */}
          </div>
          <div className="profile2">

          <p className='profile-info'>{el.name}</p>

          <p className='profile-info'>{el.email}</p>

          <p className='profile-info'>{el.student_id}</p>

          {/* <p className='profile-info'>{el.Field_of_study}</p> */}

          </div>
          </div>
        <div style={{width:"fit-content",marginRight:"0px",marginLeft:"auto"}}>
        {/* <button className='profile-button' diabled>Edit</button> */}
        <button className='profile-button' onClick={logout}>Log Out</button>
        </div>
       </div>
    </>
    ))}
    </>
  )
}

export default StudentPortal