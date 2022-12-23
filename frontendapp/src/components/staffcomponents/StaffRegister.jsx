import React from 'react';
import Staffnavbar from "./Staffnavbar";
import '../styles/Forms.css';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { signupError, signupLoading, signupSuccess } from '../../redux/staff/Actions';
import axios from 'axios';

const StaffRegister = () => {
  
  const[name, setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[confirmpass,setConformpass]=useState("");
  const[contact,setContact]=useState("");
  const[designation,setDesignation]=useState("");
  
  // const {error}=useSelector((state)=>state.signup);
  const dispatch=useDispatch();
  //register function
  let registerStaff =()=>{
    dispatch(signupLoading());
    axios({
        method: "post",
        url: 'http://localhost:8000/staff/staff/',
        data:{
          Name:name,
          Email:email,
          Designation:designation,
          Password:password
        }
    }).then((response)=>{
     console.log(response.data)
     dispatch(signupSuccess());
     if(response.data.Email===email){
     alert("User registered succesfully.");
     }
    }).catch((error)=>{
      dispatch(signupError());
      let errmessage=error.response.data.Email;
      alert("Error :"+errmessage);
    })
    }

  let handleRegister=()=>{
    //targetting elements to show alerts.
let targetname=document.getElementById("name");
let targetemail=document.getElementById("email");
let targetpass=document.getElementById("password");
let targetconfirmpass=document.getElementById("confirm");
let targetphone=document.getElementById("phone");
let targetfos=document.getElementById("select");

let emailcheck= /\S+@\S+\.\S+/;
    if(!name){
      targetname.className="form-input-alert";
      targetname.value="⚠ Please enter name";
    }
    else if(!email){
      targetemail.className="form-input-alert";
      targetemail.value="⚠ Please enter email";
    }
    else if(!emailcheck.test(email)){
      targetemail.className="form-input-alert";  
      targetemail.value="⚠ Invalid email! Please enter a valid email";
    }
    else if(contact.length!==10){
      targetphone.className="form-input-alert";  
      targetphone.type="text";
      targetphone.value="⚠ Invalid! Please enter a valid contact number";
    }
    else if(!designation){
      targetfos.className="register-form-select-alert";
      targetfos.value="Please select an option."
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
    registerStaff();
    }
  }
  let designations=["","Instructor"]
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
         <p className='form-label'>Contact Number</p>
         <input id="phone" className='form-input' type='number' value={contact}
         onChange={(event=>setContact(event.target.value))}
         onFocus={(e=>{e.target.className="form-input" 
         e.target.type="number"
         e.target.value=""})}
         />

         <p className='form-label'>Designation</p>
         <select id="select" className="register-form-select" 
         type='text' value={designation} 
         onChange={(e=>{setDesignation(e.target.value)
          e.target.className="register-form-select" 
         e.target.value=""})}>

          {/* dynamic mapping of options */}
         {designations.map((element) => (<>
           <option value={element}>{element}</option>
           </>))}
           </select>
         <p className='form-label'>Password</p>
         <input id="password" className='form-input' type='password' value={password} 
         onChange={(event=>setPassword(event.target.value))}
         onFocus={(e=>{e.target.className="form-input"
         e.target.value=""
         e.target.type="password" })}
         />
         <p className='form-label'>Confirm Password</p>
         <input id="confirm" className='form-input' type='password' value={confirmpass}
          onChange={(event=>setConformpass(event.target.value))}
          onFocus={(e=>{e.target.className="form-input"
          e.target.value=""
          e.target.type="password"})}
          />
         <button className='form-button' onClick={handleRegister}>Register</button>
    </div>
    </>
  )
}

export default StaffRegister