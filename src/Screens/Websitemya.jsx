import React from 'react'
import { useNavigate } from 'react-router-dom';
const Website = () => {
const navigate = useNavigate();
const user = localStorage.getItem("uid");

const logoutHandler =()=>{
    localStorage.removeItem("uid")
  navigate("/")
  };
  return (

    <div className="bg-dark text-white d-flex align-items-center justify-content-between p-3">
    <h3>huaifaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h3>
    <button className="btn btn-danger" onClick={logoutHandler}>
      Log Out
    </button>
  </div>

  )
}

export default Website