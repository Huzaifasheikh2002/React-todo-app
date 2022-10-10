import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {auth} from '../../firebase';
function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const loginHandler =(e)=>{
      e.preventDefault();
      signInWithEmailAndPassword(auth,email,password)

      .then((resolve)=>{
        console.log(resolve,"resolve");
        localStorage.setItem("uid",resolve.user.uid);
      })
      .catch((error)=>{
        console.log(error,"error");
      })

  }
  return (
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
        Submit
      </Button>
    </Form>
  );
}

export default Login;