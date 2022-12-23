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

//_____________________________________________________________________________

//_____________________________________________________________________________
  let getsubs=(x)=>{
    dispatch(subscriptionLoading());
    axios({
      method:"get",
      url:`http://localhost:8000/courseapi/course/${x}/`,
    }).then((res)=>{
      subsarray.push(res.data);
      dispatch(subscriptionSuccess(subsarray));
    }).catch((err)=>{
      dispatch(subscriptionError());
    })
   
  }

//_____________________________________________________________________________
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
//_____________________________________________________________________________
  let getuser=()=>{
    dispatch(profileLoading())
      axios({
        method: "post",
        url: 'http://localhost:8000/student/loggedinstudent/',
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
//_____________________________________________________________________________

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
    <h3 style={{color:"#28a745", textAlign:"center",fontSize:"1.5vw",padding:'0px',marginTop:'2vw',fontWeight:"500"}}>Your Subscriptions</h3>
    {subs.map((ele)=>(
      <Subscribedcard {...ele}/>
    ))}
    </>
  )
}

export default StudentSubscriptions