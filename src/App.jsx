import logo from './logo.svg';
import './App.css';
import Heading from './Class-practice';
import { useState } from 'react';
import AlertComponet from './Components/Alert-Componets';
import Todo from './Components/Todo';
import Home from "./Screens/Home"
import Login from './Screens/Login';
import About from "./Screens/About";
import { Link, Route, Routes } from 'react-router-dom';
import SignUp from './Screens/SignUp';
import ProtectedRoute from './ProtectedRoute';
import User from './Components/User/User';


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


    
    
{/* <Routes>
<Route index element={<Login/>}></Route> 

  <Route path='/signup'element={<SignUp />}></Route>
      
      <Route element={<ProtectedRoute/>}>
          <Route path="/todo" element={<Todo/>}></Route>
          <Route path="/about" element={<h1>About Page</h1>}></Route>
      </Route>
</Routes> */}
{/* Redux class work start */}

<Link to="/">Home Page</Link>
<Link to="/about">About Us</Link>
<Link to="/user">User Page</Link>

<Routes>
  <Route path="/" element={<h1>Home</h1>}></Route>
  <Route path="/about" element={<h1>About</h1>}></Route>
  <Route path='/user/:id'element={<User />}></Route>

</Routes>
{/* <Login/>
<About/> */}


{/* <Pract/> */}
</>
);
};

export default App;
