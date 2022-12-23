import './App.css';
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Staffportal from './components/staffcomponents/Staffportal';
import Stafflogin from './components/staffcomponents/Stafflogin';
import StaffRegister from './components/staffcomponents/StaffRegister';
import AddCourse from './components/staffcomponents/AddCourse';
import StaffCourse from './components/staffcomponents/StaffCourse';
import StaffStudent from './components/staffcomponents/StaffStudent';
import StudentPortal from './components/studentcomponents/StudentPortal';
import StudentRegister from './components/studentcomponents/StudentRegister';
import StudentLogin from './components/studentcomponents/StudentLogin';
import StudentSubscriptions from './components/studentcomponents/StudentSubscriptions';
import StudentCourses from './components/studentcomponents/StudentCourses';
import Staffnavbar from './components/staffcomponents/Staffnavbar'
import Home from './components/Home';
import { useSelector } from 'react-redux';
import Studentnavbar from './components/studentcomponents/Studentnavbar';
import Tests from './components/studentcomponents/Tests';
import TakeTest from './components/studentcomponents/TakeTest';
function App() {
let staff_token1=sessionStorage.getItem("staff_token");
let staff_token2=useSelector(state=>state.staff.login.staff_token);
let student_token1=sessionStorage.getItem("student_token");
let student_token2=useSelector(state=>state.student.login.student_token);
  return (
    <>
    <Navbar/>
    <Routes>
           <Route exact path="/" element={<Home/>}></Route>
           <Route exact path='/staff' element={<Staffnavbar/>}></Route>
           <Route exact path='/student' element={<Studentnavbar/>}></Route>
           {(!staff_token1 && !staff_token2)? (<>
           <Route exact path='/staff/login' element={<Stafflogin/>}></Route>
           <Route exact path='/staff/register' element={<StaffRegister/>}></Route>
           </>):
           (<>
           <Route exact path='/staff/profile' element={<Staffportal/>}></Route>
           <Route exact path='/staff/add-course' element={<AddCourse/>}></Route>
           <Route exact path='/staff/courses' element={<StaffCourse/>}></Route>
           <Route exact path='/staff/students' element={<StaffStudent/>}></Route>
           </>)}
           {(!student_token1&&!student_token2)? (<>
           <Route exact path='/student/login' element={<StudentLogin/>}></Route>
           <Route exact path='/student/register' element={<StudentRegister/>}></Route>
           </>):
           (<>
           <Route exact path='/student/subscriptions' element={<StudentSubscriptions/>}></Route>
           <Route exact path='/student/courses' element={<StudentCourses/>}></Route>
           <Route exact path='/student/profile' element={<StudentPortal/>}></Route>
           <Route exact path='/student/test/:id' element={<Tests/>}></Route>
           <Route exact path='/student/taketest/:testid' element={<TakeTest/>}></Route>
           </>)}
      </Routes>
    </>
  );
}

export default App;
