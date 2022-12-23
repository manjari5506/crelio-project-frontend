import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { profileError, profileLoading, profileSuccess, questionError, questionLoading, questionSuccess } from '../../redux/student/Actions';
import '../styles/Coursecard.css';

const TakeTest = () => {
  
    let test=useParams();
    const {qlist}=useSelector(state=>state.student.questions);
    const token=JSON.parse(sessionStorage.student_token);
    const {data}=useSelector(state=>state.student.profile)
    let dispatch=useDispatch();
    let usableid=data[0].Student_id;
    const[index,setIndex]=useState(0);
    const[qnumber,setQnumber]=useState(1);
    const[marks,setMarks]=useState(0);

    let evaluate=(x,y)=>{
    if(index<qlist.length-1){
      if(x==y){
        setMarks(prev=>prev+1);
        setIndex(prev=>prev+1);
        setQnumber(prev=>prev+1);
      }
      else{
        setIndex(prev=>prev+1);
        setQnumber(prev=>prev+1);
      }
    }
    else{
      if(x==y){
        setMarks(prev=>prev+1);
        submit();
        alert("Test Completed");
      }
      else if(x!=y){
      submit();
        alert("Test Completed");
      } 
    }
}
    
    let testid=Number(test.testid)
       let submit=()=>{
      // console.log(score);
      axios({
        method:"post",
        url:"http://localhost:8000/exam/score/",
        data:{
          Score:marks,
          Test_id:testid,
          Student_id:usableid
        }
    }).then((res)=>{
      alert(`Submitted Successfully your score is ${marks}`);
    }).catch((err)=>{
      alert("Error.");
    })

  }

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
      }).catch((error)=>{
        dispatch(profileError());
      })
      }

    let getQuestions=()=>{
        dispatch(questionLoading());
          axios({
            method:"post",
            url:"http://localhost:8000/exam/getquestions/",
            data:{
              Test_id:test.testid
            }
          }).then((res)=>{
            dispatch(questionSuccess(res.data.data));
          }).catch((err)=>{
            dispatch(questionError());
          })
        }
        useEffect(()=>{
          getQuestions();
          getuser();
        },[])
  return (
    <>
    {qlist? (<>
    <div className="coursecard-wrapper">
     <p className='coursecard-title'>Question: {qnumber} / {qlist.length}</p>
     <br></br>
     <p className='coursecard-title'>{qlist[index].Question}</p>
     <button  className='card-button'onClick={(e)=>{evaluate(qlist[index].Option1, qlist[index].Correct_Ans)}}
      style={{width:"max-content",marginLeft:"auto",marginRight:"auto",borderRadius:"2px"}}>
      {qlist[index].Option1}
      </button>
    <button  className='card-button'onClick={()=>{evaluate(qlist[index].Option2, qlist[index].Correct_Ans)}}
     style={{width:"max-content",marginLeft:"auto",marginRight:"auto",borderRadius:"2px"}}>
     {qlist[index].Option2}
    </button>
    <button  className='card-button' onClick={()=>{evaluate(qlist[index].Option3, qlist[index].Correct_Ans)}}
     style={{width:"max-content",marginLeft:"auto",marginRight:"auto",borderRadius:"2px"}}>
      {qlist[index].Option3}
      </button>
    <button  className='card-button' onClick={()=>{evaluate(qlist[index].Option4, qlist[index].Correct_Ans)}}
     style={{width:"max-content",marginLeft:"auto",marginRight:"auto",borderRadius:"2px"}}>
     {qlist[index].Option4}
    </button>
    </div>
</>):(<><p>No Questions Assigned.</p></>)}
    </>
  )
}

export default TakeTest