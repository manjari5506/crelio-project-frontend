import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getcourseError, getcourseLoading, getcourseSuccess,profileError, profileLoading, profileSuccess} from '../../redux/student/Actions'
import StudentCourseCard from './StudentCourseCard'
import Studentnavbar from './Studentnavbar'

const StudentCourses = () => {
  const {datacourse}=useSelector((state)=>state.student.cources);
  const token=JSON.parse(sessionStorage.student_token);
  const {data}=useSelector(state=>state.student.profile);
  let subscribed=[]
//---
  let dispatch=useDispatch();
  //console.log(datacourse);
  let getcources=()=>{
    dispatch(getcourseLoading());
      axios({
        method: "get",
        url: 'http://localhost:8000/exam/course/',
    }).then((response)=>{
      dispatch(getcourseSuccess(response.data));
    }).catch((error)=>{
      dispatch(getcourseError());
      alert("Error :"+error);
    })
    }
//---
    let fechSubs=(y)=>{
      let usableid=y.data[0].student_id;
      //console.log("USAB"+usableid);
        axios({
          method:"post",
          url:`http://localhost:8000/exam/getsubscribed`,
          data:{
            Student:usableid
          }
        }).then((res)=>{
          (res.data.data).map((ele)=>{
            subscribed.push(ele.course);
          })
          getcources();
        }).catch((err)=>{
          getcources();
        })
      }
//-------
    let getuser=()=>{
      dispatch(profileLoading())
        axios({
          method: "post",
          url: 'http://localhost:8000/std/loggedinstudent/',
          data:{
            Email:token.email,
            Password:token.password
            }
      }).then((response)=>{
        dispatch(profileSuccess(response.data));
        fechSubs(response.data);
      }).catch((error)=>{
        dispatch(profileError());
        let errmessage=error.response.data.email;
        alert("Error :"+errmessage);
      })
      } 
//-------
    useEffect(() => {
      subscribed=[]
      return () => {
        getuser();
      }
    }, [])

  return (
    <>
      <Studentnavbar/>    
      <h3 style={{color:"rgb(4,4,170)", textAlign:"center",fontSize:"2vw",padding:'0px',marginTop:'2vw',fontWeight:"600"}}>All Courses</h3>
      {datacourse?(<>{datacourse.map((element) => (<>
      <StudentCourseCard key={element.Course_id} {...element} student={data[0].student_id}/>
      </>))}</>):(<></>)}
    </>
  )
}

export default StudentCourses