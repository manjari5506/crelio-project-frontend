import React from 'react';
import Staffnavbar from "./Staffnavbar";
import '../styles/Forms.css';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { signupError, signupLoading, signupSuccess } from '../../redux/staff/Actions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StaffRegister = () => {
  
  const[name, setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const navigate = useNavigate();
  
  const dispatch=useDispatch();
  //register function
  let registerStaff =()=>{
    dispatch(signupLoading());
    axios({
        method: "post",
        url: 'http://localhost:8000/staff/staff/',
        data:{
          name:name,
          email:email,
          password:password
        }
    }).then((response)=>{
     console.log(response.data)
     dispatch(signupSuccess());
     if(response.data.email===email){
     alert("User registered succesfully.");
     }
     navigate('/staff/login');
    }).catch((error)=>{
      dispatch(signupError());
      let errmessage=error.response.data.email;
      alert("Error :"+errmessage);
    })
    }

  let handleRegister=()=>{
    //targetting elements to show alerts.
let targetname=document.getElementById("name");
let targetemail=document.getElementById("email");
let targetpass=document.getElementById("password");
let namecheck = /^[A-Za-z][A-Za-z0-9_]/;
let emailcheck= /\S+@\S+\.\S+/;
    if(!name){
      targetname.className="form-input-alert";
      targetname.value="⚠ Please enter name";
    }
    else if(!namecheck.test(name)){
      targetname.className="form-input-alert";  
      targetname.value="⚠ Invalid name! Name should start with alphabet.";
    }
    else if(!email){
      targetemail.className="form-input-alert";
      targetemail.value="⚠ Please enter email";
    }
    else if(!emailcheck.test(email)){
      targetemail.className="form-input-alert";  
      targetemail.value="⚠ Invalid email! Please enter a valid email";
    }
    else if(!password){
      targetpass.className="form-input-alert";
      targetpass.type="text";  
      targetpass.value="⚠ Please enter password";
    }
    else{
    registerStaff();
    }
  }

  return (
    <>
    <Staffnavbar/>
   
    <div className='form-wrapper'>
    <h3 style={{color:"rgb(4,4,170)", textAlign:"center",fontSize:"2vw",padding:'0px',margin:'0px',fontWeight:"500"}}>Register</h3>
    <p className='form-label'>Name</p>
         <input id="name" className='form-input' type='text' value={name} 
         onChange={(event=>setName(event.target.value))}
         onFocus={(e=>{e.target.className="form-input"
         e.target.value=""})}
         />
         <p className='form-label'>Email</p>
         <input id="email" className='form-input' type='text' value={email} 
         onChange={(event=>setEmail(event.target.value))}
         onFocus={(e=>{e.target.className="form-input" 
         e.target.value=""})}
         />

         <p className='form-label'>Password</p>
         <input id="password" className='form-input' type='password' value={password} 
         onChange={(event=>setPassword(event.target.value))}
         onFocus={(e=>{e.target.className="form-input"
         e.target.value=""
         e.target.type="password" })}
         />

         <button className='form-button' onClick={handleRegister}>Register</button>
    </div>
    </>
  )
}

export default StaffRegister