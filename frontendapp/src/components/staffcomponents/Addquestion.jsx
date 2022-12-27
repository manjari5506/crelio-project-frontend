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
  bgcolor: 'background.paper',
  border: '1px solid rgb(4,4,170);',
  boxShadow: 24,
  textAlign:'center',
  p: 4,
};

export default function Addquestion({Exam_id, name}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [question, setQuestion]=React.useState("");
  const [op1,setOp1]=React.useState("");
  const [op2,setOp2]=React.useState("");
  const [op3,setOp3]=React.useState("");
  const [op4,setOp4]=React.useState("");
  const [corr,setCorr]=React.useState("");
  //console.log(Exam_id);
  let dispatch=useDispatch();
  let addques=()=>{
 if(!question){
    alert("Please enter question.")
 }
 else if(!op1||!op2||!op3||!op4||!corr){
    alert("Please fill all the fields")
 }
 else if(corr!==op1&&corr!==op2&&corr!==op3&&corr!==op4){
    alert("Correct ans should be in options.")
 }
 else{
    axios({
        method:"post",
        url:"http://localhost:8000/exam/question/",
        data:{
            Exam:Exam_id,
            Question:question,
            Option1:op1,
            Option2:op2,
            Option3:op3,
            Option4:op4,
            Correct_Ans:corr,
        }
    }).then((response)=>{
          alert(`Question added successfully to ${name}`)
          handleClose();
    }).catch((error)=>{
           console.log(error);
    })
 }
}
  return (
    <div>
      <button onClick={handleOpen} className='profile-button' style={{width:"100%"}}>Add Question</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <h3 style={{color:"rgb(4,4,170)",fontSize:"2vw",fontWeight:"400",textAlign:"center"}}>Add Question for {name}</h3>
         <p className='form-label'>Question</p>
         <textarea rows = "3" className='course-form-textfield' placeholder="500 characters maximum...." type='text'
         value={question} onChange={(e)=>setQuestion(e.target.value)}
         />
         <input className='course-form-input'
          style={{marginLeft:"auto",marginRight:"auto"}} type='text'
          placeholder='Option 1...'
          value={op1} onChange={(e)=>setOp1(e.target.value)}
          />
          <input id="email" className='course-form-input'
          style={{marginLeft:"auto",marginRight:"auto"}} type='text'
          placeholder='Option 2...'
          value={op2} onChange={(e)=>setOp2(e.target.value)}
          />
          <input id="email" className='course-form-input'
          style={{marginLeft:"auto",marginRight:"auto"}} type='text'
          placeholder='Option 3...'
          value={op3} onChange={(e)=>setOp3(e.target.value)}
          />
          <input id="email" className='course-form-input'
          style={{marginLeft:"auto",marginRight:"auto"}} type='text'
          placeholder='Option 4...'
          value={op4} onChange={(e)=>setOp4(e.target.value)}
          />
          <input id="email" className='course-form-input'
          style={{marginLeft:"auto",marginRight:"auto"}} type='text'
          placeholder='Correct answer'
          value={corr} onChange={(e)=>setCorr(e.target.value)}
          />
         <button className='form-button' onClick={addques}>Add</button>
        </Box>
      </Modal>
    </div>
  );
}