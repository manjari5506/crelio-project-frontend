import * as React from 'react';
import '../styles/Forms.css';
import '../styles/Profile.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import '../styles/Forms.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addtestError, addtestLoading, addtestSuccess } from '../../redux/staff/Actions';

const style = {
  position: 'absolute',
  top: '15%',
  left: '50%',
  transform: 'translate(-50%)',
  width:'maxContent',
  //bgcolor: 'background.paper',
  bgcolor: 'rgb(218,216,216)',
  //border: '1px solid rgb(4,4,170);',
  boxShadow: 24,
  textAlign:'center',
  p: 4,
};

export default function AddTest({course_id, name}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [tname, setTname]=React.useState("");
  let dispatch=useDispatch();
  let addTest=()=>{
 if(!tname){
    alert("Please enter Exam name.")
 }
 else{
    dispatch(addtestLoading());
    axios({
        method:"post",
        url:"http://localhost:8000/exam/exam/",
        data:{
            Exam_name:tname,
            Course:course_id
        }
    }).then((response)=>{
          dispatch(addtestSuccess(response.data));
          alert(`Exam successfully added to course ${name}`);
          handleClose();
          window.location.reload();
    }).catch((error)=>{
           console.log(error);
           alert("Exam with same name already exist!");
           dispatch(addtestError());
           setTname("");
    })
 }
}
  return (
    <div>
      <button onClick={handleOpen} className='profile-button'>Add Exam</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <h3 style={{color:"rgb(4,4,170",fontSize:"2vw",fontWeight:"400",textAlign:"center"}}>Add Exam for {name}</h3>
         <p className='form-label' style={{textAlign:"center"}}>Exam name</p>
         <input id="email" className='course-form-input'
          style={{marginLeft:"auto",marginRight:"auto"}} type='text'
          value={tname}
          onChange={(ele)=>setTname(ele.target.value)}
          />
         <button className='form-button' onClick={addTest}>Add</button>
        </Box>
      </Modal>
    </div>
  );
}