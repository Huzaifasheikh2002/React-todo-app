import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../firebase';
// import {db} from "../firebase"
import { collection, addDoc, } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { doc, setDoc } from "firebase/firestore";
// import LoginButton from '../../Components/LoginButton';


const SignUp = () => {
  // const [firstname,setFirstname]=useState("")
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  // const [lastname,setLastname]=useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phoneNumber, setphoneNumber] = useState("")

  const navigate = useNavigate()
  const user = localStorage.getItem("uid")


  useEffect(() => {

    if (user) {
      navigate("/todo")
    }
  }, []);


  const signupHandler = (e) => {
    e.preventDefault();
    console.log("phoneNumber", phoneNumber)
    console.log("submit");
      const dbCollection = collection(db,"users")

    createUserWithEmailAndPassword(auth,email,password,)
    .then (async(resolve)=>{
    console.log(resolve,"resolve");
    const obj={
    firstname,
    lastname,
    phoneNumber,
    email,
    uid:resolve.user.uid,
  };
  console.log("obj" , obj)
  await setDoc(doc(db, "users", resolve.user.uid), obj);
  // await setDoc(doc(db, "users", resolve.user.phoneNumber), obj);
  navigate("/");

})
  .catch (error=> {
  console.log(error, "error");
})
};


const Login_Button = () => {
  navigate("/")
}

return (
  <>
    <div className="bg-dark text-white d-flex align-items-center justify-content-between p-3">
      <h3>Todo App List</h3>
    </div>
    <section className='header'>
      <section className='container mt-5'>
        <h1>SignUp</h1>
        <Form onSubmit={signupHandler}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control onChange={(e) => {
              setfirstname(e.target.value);
            }}

              type="text" placeholder="First Name" />
          </Form.Group>
          {/*  */}

          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              // for="typePhone" 
              type="text"
              onChange={(e) => {
                setlastname(e.target.value);
              }}
              placeholder="Enter last Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}

              placeholder="Email Address" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setphoneNumber(e.target.value);
              }}
              placeholder="Phone Number" />
          </Form.Group>
     

          <Button variant="primary" type="submit">
            Sign Up
          </Button>

          {/* <LoginButton 

    /> */}
          <Button
            className="LoginBtn"
            onClick={Login_Button} variant="primary">
            Log In
          </Button>
        </Form>

      </section>
    </section>
  </>)
}

export default SignUp