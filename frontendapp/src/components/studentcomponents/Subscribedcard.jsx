import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Coursecard.css';


const Subscribedcard = ({Name,Description,Course_id,Author}) => {
    const[author,setAuthor]=useState(null);
    console.log(Description)
    let getauthor=()=>{
        axios({
          method: "post",
          url: `http://localhost:8000/staff/staff/${Author}`,
          data: {Course: Course_id}
      }).then((response)=>{
      setAuthor(response.data.name);
      
      }).catch((error)=>{
      console.log(error);
      })
      }


useEffect(()=>{
    getauthor();
},[])

  return (
    <div className="coursecard-wrapper">
    <h2 className='coursecard-title'>{author}</h2>
    <button style={{width:"max-content",margin:"0px",color:"grey",fontWeight:"600",fontSize:"1vw",backgroundColor:"white",border:"1px solid"}} disabled>Course:{Name}</button>
    <p className='coursecard-desc'><b>Description:</b>{Description}</p>
    <NavLink to={`/student/test/${Course_id}`}>
    <button className='card-button' style={{width:"max-content"}}>Exam</button>
    </NavLink>
    </div>
  )
}

export default Subscribedcard