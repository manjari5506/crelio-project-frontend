import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addcourseError, addcourseLoading, addcourseSuccess } from '../../redux/staff/Actions';
import Staffnavbar from "./Staffnavbar";

const AddCourse = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const {data}=JSON.parse(sessionStorage.staffid);
  let author=data[0].staff_id;
  let dispatch=useDispatch();
  //console.log(author)
 // const[test,setTest]=useState("");
 // let testlist=[{id:"",name:""},{id:"1",name:"HTML"},{id:"2",name:"CSS"},{id:"3",name:"JavaScript"}]
  let handleAction=()=>{
   if(!email){
    alert("Please Enter Course Name");
   }
   else if(password.length<100){
    alert("Please enter atleast 100 characters");
   }
   else{
    dispatch(addcourseLoading());
    axios({
      method:"post",
      url:'http://localhost:8000/exam/course/',
      data:{
        Name:email,
        Description:password,
        Author:author,
      }
    }).then((response)=>{
     dispatch(addcourseSuccess());
    }).catch((error)=>{
      alert(error);
      dispatch(addcourseError());
    })
   }
  }
  return (
  <>
    <Staffnavbar/>
    <div className='form-wrapper'>
    <h3 style={{color:"rgb(4,4,170)", textAlign:"center",fontSize:"2vw",padding:'0px',margin:'0px',fontWeight:"500"}}>Add Course</h3>
         <p className='form-label'>Course Name</p>
         <input className='course-form-input' type='text' value={email} onChange={(event=>setEmail(event.target.value))}/>
         <p className='form-label'>Description</p>
         <textarea rows = "7" className='course-form-textfield' placeholder="Maximum characters are 100" type='text' value={password} onChange={(event=>setPassword(event.target.value))}/>

         <button className='form-button' onClick={handleAction}>Create</button>
    </div>
  </>
  )
}

export default AddCourse