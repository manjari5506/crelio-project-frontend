import React from 'react';
import Staffnavbar from './Staffnavbar';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { listError, listLoading, listSuccess } from '../../redux/staff/Actions';
import '../styles/Forms.css';
import '../styles/Profile.css'


const StaffStudent = () => {
const dispatch=useDispatch();

const {data}= useSelector(state=>state.staff.list);
//fetch the student data
let handlefetch=()=>{
dispatch(listLoading())
  axios({
    method: "get",
    url: 'http://localhost:8000/std/student/',
}).then((response)=>{
  dispatch(listSuccess(response.data));
  // alert("Disabled successfully")
}).catch((error)=>{
  dispatch(listError());
  let errmessage=error.response.data.Email;
  alert("Error :"+errmessage);
})
}
useEffect(()=>{
  handlefetch();
},[])
//disable the student
// let disable=(key)=>{
// axios({
//     method: "post",
//     url: `http://localhost:8000/std/student/${key}/`,
//     data:{
//       active:false
//     },
// }).then((response)=>{
//   handlefetch();
// }).catch((error)=>{
//   let errmessage=error.response.data.Email;
//   alert("Error :"+errmessage);
// })
// }
// let enable=(key)=>{
//   axios({
//       method: "post",
//       url: `http://localhost:8000/std/student/${key}/`,
//       data:{
//         active:true
//       },
//   }).then((response)=>{
//     handlefetch();
//   }).catch((error)=>{
//     let errmessage=error.response.data.Email;
//     alert("Error :"+errmessage);
//   })
//   }
  return (<>
    <Staffnavbar/>
    <div style={{marginTop:"3vw",display:"grid",width:"95%",marginLeft:"auto",marginRight:"auto",
    position:"relative",gridTemplateColumns:"repeat(1, 1fr)"}} >
        {data.map((ele) => (<>{(ele.active)?(<div id="card" style={{width:"50%", padding:"1vw",border:"none",backgroundColor:"rgb(218,216,216)",borderRadius:"10px", marginLeft:"auto", 
        marginRight:"auto",marginBottom:"1.5vw"}} key={ele.student_id}>

        <p className='profile-info'><b>Name :</b> {ele.name}</p>
        <p className='profile-info'><b>Email :</b> {ele.email}</p>
        {/* <div style={{width:"fit-content",marginRight:"0px",marginLeft:"auto",marginTop:'0px',marginBottom:'0px'}}>
        <button className='profile-button' onClick={()=>disable(ele.student_id)}>Disable</button>
        </div> */}
        </div>):(<div id="card" style={{width:"90%", padding:"1vw", border:"1px solid grey", marginLeft:"auto", 
        marginRight:"auto",marginBottom:"1.5vw",opacity:"70%"}} key={ele.Student_id}>
        <p className='profile-info'><b>Name :</b> {ele.name}</p>
        <p className='profile-info'><b>Email :</b> {ele.email}</p>
        {/* <div style={{width:"fit-content",marginRight:"0px",marginLeft:"auto",marginTop:'0px',marginBottom:'0px'}}>
        <button className='profile-button-disabled' onClick={()=>enable(ele.student_id)}>Enable</button>
        </div> */}
        </div>)}</>))}
        </div>
        </>)
}

export default StaffStudent