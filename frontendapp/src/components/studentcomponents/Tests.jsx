import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { testError, testLoading, testSuccess } from '../../redux/student/Actions';
import Studentnavbar from './Studentnavbar'
import '../styles/Coursecard.css';

const Tests = () => {
  let course=useParams();
  const dispatch=useDispatch();
  let {testlist}=useSelector(state=>state.student.tests);

  let getTest=()=>{
  dispatch(testLoading());
  console.log(testlist);
    axios({
      method:"post",
      url:"http://localhost:8000/exam/getassignedexam/",
      data:{
        Course:course.id
      }
    }).then((res)=>{
      dispatch(testSuccess(res.data.data));
    }).catch((err)=>{
      dispatch(testError());
    })
  }
  useEffect(()=>{
    //getTest();
  },[])
  return (<>
    <Studentnavbar/>
    {testlist ?(<>
    {testlist.map((ele)=>(<>
    <div style={{textAlign:"center",marginTop:"2vw"}}>
    <NavLink to={`/student/taketest/${ele.Exam_id}`}>
    <button className='card-button' style={{width:"max-content"}}>{ele.Exam_name}</button>
    </NavLink>
    </div>
    </>))}
    </>):(<>
    <div style={{textAlign:"center",marginTop:"2vw"}}>
    <button className='card-button' style={{width:"max-content"}}>No tests assigned yet</button>
    </div>
    </>)}
    
</>)
}

export default Tests