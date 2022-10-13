import { signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import {auth} from '../../firebase';


function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const user = localStorage.getItem("uid")
  const navigate = useNavigate();

useEffect(()=>{
if(user){
navigate("/todo")
}
},[]);

const LogIn_SignUp=()=>{
  navigate("/signup");

}

  const loginHandler =(e)=>{
      e.preventDefault();
      signInWithEmailAndPassword(auth,email,password)

      .then(async(resolve)=>{
        console.log(resolve,"resolve");
        localStorage.setItem("uid",resolve.user.uid);
        navigate("/todo");
      })
      .catch((error)=>{
        console.log(error,"error");
      })

  }
  return (<>
    <div className="bg-dark text-white d-flex align-items-center justify-content-between p-3">
       <h3>Todo App List</h3>
    </div>
    <section className='container mt-5'>
    <h1>Log in</h1>
      
    <Form onSubmit={loginHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"
              onChange={(e)=>{
                setEmail(e.target.value);}}   
              placeholder="Enter email" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"
              onChange={(e)=>{
                setPassword(e.target.value);}}   
              placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
       Log in
      </Button>    

      <Button className="SignUpBtn" 
      onClick={LogIn_SignUp}
      variant="primary">
       Sign Up
      
      </Button> 
    </Form>
    </section>
    </>);
}

export default Login;