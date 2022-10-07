import logo from './logo.svg';
import './App.css';
import Heading from './Class-practice';
import { useState } from 'react';
import AlertComponet from './Components/Alert-Componets';
import Todo from './Components/Todo';
import Home from "./Screens/Home"
import Login from './Screens/Login';
import About from './Screens/About';
import { Route, Routes } from 'react-router-dom';
import SignUp from './Screens/SignUp';
// import Pract from './Components/Pract';
// import UpdateButton from "./Assets"


const App = ()=> {
//   const[name,setName]=useState("huzi");
//   const[name2,setName2]=useState("node");
//   const[AppchildData,setChildData]=useState("");

//   const btnSubmit=()=>{
//     setName("cricket");
//     setName2("football");
//   };

//   console.log(name,"state");

//   const getData =(data)=>{
//     console.log(data);
//     setChildData(data)
//     };
    // const [bool ,setBool]=useState("")
// const[darkMode,setDarkMode ]=useState(false);

  return(<>
  {/* {AppchildData}
  <Heading text="heading-1" name={name} getData={getData}/>
  <button onClick={btnSubmit}>Submit</button> */}
  
  {/* Start condition rendering */}
  {/* <Heading bool ={true}/> */}
  {/* End condition rendering */}

{/* {
bool ==="nadeem" ? <h1>papa</h1>
: bool=== "hamza" ?<h1>bhai</h1>
: <h1>USER</h1>
} */}


{/* <div className='box1' style={{backgroundColor:darkMode ? "#000":"#ffff"}}> 
  <button onClick={()=>{
    setDarkMode(!darkMode);
  }}>
    {darkMode ?"White": "DARK"}
  </button>
  <button className='btn btn-primary'>Bootstrap</button>

</div> */}
{/* <Todo/> */}
<Routes>

  <Route path='/todo' element={<Todo/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/signup' element={<SignUp  />}></Route>
</Routes>
{/* <Login/>
<About/> */}


{/* <Pract/> */}
</>
);
};

export default App;
