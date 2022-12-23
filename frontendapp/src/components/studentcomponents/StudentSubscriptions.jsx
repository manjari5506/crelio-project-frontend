import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { profileError, profileLoading, profileSuccess, subscriptionError, subscriptionLoading, subscriptionSuccess } from '../../redux/student/Actions';
import Studentnavbar from './Studentnavbar'
import Subscribedcard from './Subscribedcard';

const StudentSubscriptions = () => {
  const token=JSON.parse(sessionStorage.student_token);
  let subsarray=[];
  const {subs}=useSelector(state=>state.student.subscriptions);
  let dispatch=useDispatch();


  let getsubs=(x)=>{
    dispatch(subscriptionLoading());
    axios({
      method:"get",
      url:`http://localhost:8000/exam/course/${x}/`,
    }).then((res)=>{
      subsarray.push(res.data);
      dispatch(subscriptionSuccess(subsarray));
    }).catch((err)=>{
      dispatch(subscriptionError());
    })
   
  }

  let fechSubs=(y)=>{
  let usableid=y.data[0].Student_id;
    axios({
      method:"post",
      url:"http://localhost:8000/exam/getsubscribed/",
      data:{
        Student:usableid
      }
    }).then((res)=>{
      (res.data.data).map((ele)=>{
        getsubs(ele.Course);
      })
    }).catch((err)=>{
      
    })
  }

  let getuser=()=>{
    dispatch(profileLoading())
      axios({
        method: "post",
        url: 'http://localhost:8000/std/loggedinstudent/',
        data:{
          Email:token.Email,
          Password:token.Password
          }
    }).then((response)=>{
      dispatch(profileSuccess(response.data));
      fechSubs(response.data);
    }).catch((error)=>{
      dispatch(profileError());
    })
    }


    useEffect(() => {
      subsarray=[]
      dispatch(subscriptionSuccess(subsarray));
      return () => {
        getuser();
      }
    }, [])
    
  return (
    <>
    <Studentnavbar/>
    <h3 style={{color:"rgb(4,4,170)", textAlign:"center",fontSize:"1.5vw",padding:'0px',marginTop:'2vw',fontWeight:"500"}}>Your Subscriptions</h3>
    {subs.map((ele)=>(
      <Subscribedcard {...ele}/>
    ))}
    </>
  )
}

export default StudentSubscriptions