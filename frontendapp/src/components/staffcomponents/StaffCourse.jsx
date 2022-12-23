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
let id=data[0].Staff_id;
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
      alert(error);
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
      // console.log(response.data)
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
        {courses.map((ele)=>(<div id="card" style={{width:"90%", padding:"1vw", border:"1px solid black", marginLeft:"auto", 
        marginRight:"auto",marginBottom:"1.5vw"}}>

        <p className='profile-info'><b>Name :</b> {ele.Name}</p>
        <p className='profile-info'><b>Description :</b> {ele.Description}</p>
        <div style={{width:"fit-content",marginRight:"0px",marginLeft:"auto",marginTop:'0px',marginBottom:'0px'}}>
        <AddTest course_id={ele.Course_id} name={ele.Name}/>
        </div>
        </div>))}
      </div>
      {test!==[] ?(<div>
        {test.map((ele)=>(<div id="card" style={{width:"90%", padding:"1vw", border:"1px solid black", marginLeft:"auto", 
        marginRight:"auto",marginBottom:"1.5vw",display:"flex"}}>
        <p className='profile-info'><b>Test Name :</b> {ele.Test_name}</p>
        {/* <p className='profile-info'><b>Description :</b> {ele.Test_name}</p> */}
        <div style={{width:"fit-content",marginRight:"10px",marginLeft:"auto",marginTop:'0px',marginBottom:'0px'}}>
        <Addquestion Test_id={ele.Test_id} name={ele.Test_name} />
        </div>
        </div>))}
      </div>):(<></>)}
    </div>
    </>
  )
}
// .filter((ele)=>{course_ids.includes(ele.Course)})
export default StaffCourse