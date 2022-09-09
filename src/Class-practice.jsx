import React from "react";
import  { useState } from "react";

const Heading =({text,name,getData ,bool})=>{
    const [childData,setChildData] = useState("huzaifanadeemsheikh")
    console.log(getData,"function getdata");
    return<>
    <h1>{text}</h1>
    <h1>{name}</h1>
    <button onClick={()=>getData(childData)}>Submit child data</button>

    {/* Start condition rendering neevhe terninary operator use hua hai ternairy multiple statement return nhi krkste*/}
    {bool ? <h1>good</h1>:<h1>bad</h1>}
    {/* End condition rendering  */}
    </>
}

export default Heading;