import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getcourseError, getcourseLoading, getcourseSuccess, gettestError, gettestLoading, gettestSuccess } from '../../redux/staff/Actions';
import AddTest from './AddTest';
import Staffnavbar from './Staffnavbar'
import '../styles/Forms.css';
import '../styles/Profile.css'
import Addquestion from './Addquestion';

const StaffCourse = () => {
  const[active, setActive]=useState(false);
  const dispatch=useDispatch();
  const {data}=JSON.parse(sessionStorage.staffid);
  const {courses}=useSelector(state=>state.staff.getcourse);
  const {tests}=useSelector(state=>state.staff.gettest);
  let course_ids=[];
  let test=[]
if (courses){
 courses.map((ele)=>{course_ids.push(ele.Course_id)
})
}
if(tests){
for(let i=0;i<tests.length;i++){
  if(course_ids.includes(tests[i].Course)){
    test.push(tests[i]);
  }
}
}
let id=data[0].staff_id;
  let handlefetch=()=>{
    dispatch(getcourseLoading())
      axios({
        method: "post",
        url: 'http://localhost:8000/exam/getcourses/',
        data:{
          Author:id,
        }
    }).then((response)=>{
      dispatch(getcourseSuccess(response.data.data));

    }).catch((error)=>{
      dispatch(getcourseError());
      alert("No Courses available for this user...");
    })
    }
    useEffect(()=>{
      handlefetch();
      getTest();
    },[])

  let getTest=()=>{
     dispatch(gettestLoading());
     axios({
      method:"get",
      url:'http://localhost:8000/exam/exam/'
     }).then((response)=>{
      // console.log("Response"+response.data)
      dispatch(gettestSuccess(response.data));
     }).catch((error)=>{
      dispatch(gettestError());
      console.log(error);
     })
  }

  return (
    <>
    <Staffnavbar/>
    <div style={{marginTop:"3vw",display:"grid",width:"95%",marginLeft:"auto",marginRight:"auto",
    position:"relative",gridTemplateColumns:"repeat(2, 1fr)"}} >
      <div>
      <h3>Courses</h3>
        {courses.map((ele)=>(<div id="card" style={{width:"90%", padding:"1vw", border:"none",backgroundColor:"rgb(218,216,216)",borderRadius:"10px", marginLeft:"auto", padding:"20px",
        marginRight:"auto",marginBottom:"1.5vw"}}>

        <p className='profile-info'><b>Name :</b> {ele.Name}</p>
        <p className='profile-info'><b>Description :</b> {ele.Description}</p>
        <div style={{width:"fit-content",marginRight:"0px",marginLeft:"auto",marginTop:'0px',marginBottom:'0px'}}>
        <AddTest course_id={ele.Course_id} name={ele.Name}/>
        </div>

        </div>))}
      </div>
      
      {test!==[] ?(<div>
        <h3>Exams</h3>
        {test.map((ele)=>(<div id="card" style={{width:"90%", padding:"1vw", border:"none",backgroundColor:"rgb(218,216,216)", borderRadius:"10px" ,marginLeft:"auto",padding: "20px", 
        marginRight:"auto",marginBottom:"1.5vw",display:"flex"}}>
        <p className='profile-info'><b>Name :</b> {ele.Exam_name}</p>
         {/* <p className='profile-info'><b>Course:</b> {ele.Course.Name}</p>  */}
        <div style={{width:"fit-content",marginRight:"10px",marginLeft:"auto",marginTop:'0px',marginBottom:'0px'}}>
        <Addquestion Exam_id={ele.Exam_id} name={ele.Exam_name} />
        </div>
        </div>))}
      </div>):(<></>)}
    </div>
    </>
  )
}
// .filter((ele)=>{course_ids.includes(ele.Course)})
export default StaffCourse