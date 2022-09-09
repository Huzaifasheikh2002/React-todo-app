import logo from './logo.svg';
import './App.css';
import Heading from './Class-practice';
import { useState } from 'react';


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
    const [bool ,setBool]=useState("")
  return(<>
  {/* {AppchildData}
  <Heading text="heading-1" name={name} getData={getData}/>
  <button onClick={btnSubmit}>Submit</button> */}
  
  {/* Start condition rendering */}
  {/* <Heading bool ={true}/> */}
  {/* End condition rendering */}

{
bool ==="nadeem" ? <h1>papa</h1>
: bool=== "hamza" ?<h1>bhai</h1>
: <h1>USER</h1>
}

</>
);
};

export default App;
