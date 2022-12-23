import React, { useState } from 'react';
import Staffnavbar from "./Staffnavbar";
import '../styles/Forms.css';
import { useDispatch } from 'react-redux';
import { loginError, loginLoading, loginSuccess } from '../../redux/staff/Actions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Stafflogin = () => {
  
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[confirmpass,setConformpass]=useState("");
  const dispatch=useDispatch();
  const navigate = useNavigate();
  let login=()=>{
    dispatch(loginLoading())
        axios({
          method:"post",
          url: 'http://localhost:8000/staff/staff/',
          data:{Email:email,
          Password:password}
      }).then((response)=>{
        sessionStorage.setItem("staff_token",JSON.stringify(response.data))
        console.log(response.data)
        dispatch(loginSuccess(response.data));
        alert("Login successful.");
        navigate('/staff/profile');
      }).catch((error)=>{
        dispatch(loginError());
        let errmessage="Invalid credientials";
        alert("Error :"+errmessage);
      })
  }


  let handleLogin=()=>{
      //targetting elements to show alerts.
  let targetemail=document.getElementById("email");
  let targetpass=document.getElementById("password");
  let targetconfirmpass=document.getElementById("confirm"); 

    let emailcheck= /\S+@\S+\.\S+/;
    if(!email){
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
    else if(!confirmpass){
      targetconfirmpass.className="form-input-alert"; 
      targetconfirmpass.type="text";
      targetconfirmpass.value="⚠ Please confirm password"
    }
    else if(password!==confirmpass){
      targetconfirmpass.className="form-input-alert";
      targetconfirmpass.type="text";
      targetconfirmpass.value="⚠ Password and Confirm passsword should be same";
    }
    else{
    login();
    }
  }
  return (
    <>
    <Staffnavbar/>
    
    <div className='form-wrapper'>
    <h3 style={{color:"rgb(4,4,170)", textAlign:"center",fontSize:"2.5vw",padding:'0px',margin:'0px',fontWeight:"500"}}>Login</h3>
    <p className='form-label'>Email</p>
         
         <input id="email" className="form-input" type='text' value={email} 
         onChange={(event=>{setEmail(event.target.value)})}
         onFocus={(e=>{e.target.className="form-input" 
         e.target.value=""})}
         />
         <p className='form-label'>Password</p>
         
         <input id="password" className="form-input" type='password' value={password}
          onChange={(event=>setPassword(event.target.value))}
          onFocus={(e=>{e.target.className="form-input"
          e.target.value=""
          e.target.type="password"})}
          />
         <p className='form-label'>Confirm Password</p>
         
         <input id="confirm" className="form-input" type='password' value={confirmpass} 
         onChange={(event=>setConformpass(event.target.value))}
         onFocus={(e=>{e.target.className="form-input"
         e.target.value=""
         e.target.type="password"})}
         />
         <button className='form-button' onClick={handleLogin}>Login</button>
    </div>
    </>
  )
}

export default Stafflogin