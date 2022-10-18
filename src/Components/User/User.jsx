import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const params = useParams();
  console.log("aa");

  return (<>
  <div>User Comp</div>
  </>)
};

export default User; 