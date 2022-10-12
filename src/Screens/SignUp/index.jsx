import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth,db} from '../../firebase';
// import {db} from "../firebase"
import { collection, addDoc, } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { doc, setDoc } from "firebase/firestore"; 


const SignUp = () => {
  const [fullname,setfullname]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate = useNavigate()
  const user = localStorage.getItem("uid")

  useEffect(() => {

  if (user)  {
    navigate("/todo")
  }
}, []);


const signupHandler= (e)=>{
  e.preventDefault();
  console.log("submit");
  const dbCollection = collection(db,"users")
 
  
  createUserWithEmailAndPassword(auth,email,password)
.then (async(resolve)=>{
console.log(resolve,"resolve");
const obj={
  fullname,
  email,
  uid:resolve.user.uid 
};
await setDoc(doc(db,"users",resolve.user.uid),obj);
navigate("/");

})
.catch(error=>{
  console.log(error,"error");
})
};
  return (
    <>
    <section className='container mt-5'>
    <h1>SignUp</h1>
    <Form onSubmit={signupHandler}>
      
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Full Name</Form.Label>
<Form.Control onChange={(e)=>{
setfullname(e.target.value);}} 

type="text" placeholder="Full Name" />
    </Form.Group>
    {/*  */}

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email Address</Form.Label>
      <Form.Control type="email" 
      onChange={(e)=>{
        setEmail(e.target.value);}} 
      
      placeholder="Email Address" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" 
      onChange={(e)=>{
        setPassword(e.target.value);}} 
      placeholder="Password" />
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </section>
   </>)
}

export default SignUp