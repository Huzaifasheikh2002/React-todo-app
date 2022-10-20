import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const {name}  = useParams();
  console.log(name, "names");

  return (<>
  <div> {name}</div>
  </>)
};

export default User;