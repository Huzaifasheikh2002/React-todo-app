import React, { useEffect, useState } from "react";
// import {FcFullTrash } from "react-icons/fc"
import { AiOutlinePlus} from "react-icons/ai"
import {FaEdit ,FaTrashAlt} from "react-icons/fa"
import Update from '../Components/Assets/updateIcon.png' 

import {db} from "../firebase"
import { collection, addDoc ,getDocs,doc,updateDoc, deleteDoc } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";


const Todo = () => {
  const [todoItem, setTodoItem] = useState([]);
  const [inputValue, setInputValue] = useState("")
  const [indexNumber, setIndexNumber,] = useState("")
  const [updateInput, setUpdateInput] = useState("");
  const [event, setevent] = useState("all");
  const [borderval, setborderval] = useState("none")
  const [refresh, setRefresh] = useState(false);

// CREATE COLLECTION
const dbCollection = collection(db,"todoCollection")


const navigate = useNavigate();
const user = localStorage.getItem("uid");
// useEffect(()=>{
//   if(!user){
//     navigate("/");
//   }
// },[]);


useEffect(()=>{
async function getData(){  

  const querySnapshot = await getDocs(dbCollection);
  const arr=[]
  querySnapshot.forEach((doc) => {
    arr.push({
      id: doc.id,
      value:doc.data().todoValue,
    });
    console.log(`${doc.id} => ${doc.data()}`);
  });
  setTodoItem([...arr])
// console.log(arr,"a");
}
getData();

},[refresh]);
  // console.log(db,"dbcollection");
  const addTodo = async () => {
    if(!inputValue){
    setborderval("1px solid red")
    }
    else{
      const obj={  
        todoValue:inputValue,
      };
      const docRef = await addDoc(dbCollection,obj)
      setRefresh(!refresh)      
      // OLD
        todoItem.push({value:inputValue});
        setTodoItem([...todoItem]);
        setInputValue("");
      }};
  // console.log(inputValue,"inputValueee");

  // delete All list
  // const deleteAll = () => {
  //   setTodoItem([]);
  // };

  // 

  //    delete 1 Todo list 
  const deleteTodo = async(index) => {
    const id = todoItem[index].id;
    const dbRef =doc(db,"todoCollection",id)
    await deleteDoc(dbRef);
    // console.log("delete todo", index);
    // splice 1st argument khn sy delete krna hai or 2 argument kitni value delete krni hai
    todoItem.splice(index, 1);
    setTodoItem([...todoItem]); 
  };
  //   
  //     // updatetodo
  const updateTodo = async (index) => {

    //update firebase collection
    const id =todoItem[index].id;
const dbRef=doc(db,"todoCollection",id)
  await updateDoc(dbRef, {
    todoValue:updateInput,
  })
  if(!updateInput);
  else{ 
    todoItem.splice(index, 1, {value:updateInput,id});
    setTodoItem([...todoItem]);
    setIndexNumber("");
    setevent("all")
    setUpdateInput("");

  }};
  //      
  // edit
  const editTodo = (index) => {
    setUpdateInput(todoItem[index].value);

  };
  //      
  return (
    <section className="Main-Container">
      <h1>Todo App List</h1>
      <div className="mt-5 px-4">
        <div className="inputDiv">

      <input type="text" className="inputFeild" style={{border : borderval}}
          placeholder="Enter todo" value={inputValue} onChange={(e) => setInputValue(e.target.value)} 
          />
              {/* <button><i class="fa-solid fa-plus"></i></button> */}
              
<AiOutlinePlus className="todoBtn" style={{ pointerEvents: event }} onClick={addTodo}/>
        </div>

        <div className="mt-5 d-flex gap-2 ">
          {/* <button className="btn btn-primary" Add Todo</button> */}
          {/* <button onClick={deleteAll} className="btn btn-danger" style={{ pointerEvents: event }} >Delete All</button> */}
        </div>
      </div>

      <section className="mt-5 px-4">
        {todoItem.map((todo, index) => {

          return (

            <React.Fragment key={index}>
              {indexNumber === index ? (
                <div className="inputDiv">
                  <input
                    onChange={(e) => setUpdateInput(e.target.value)}
                    className="inputFeild"
                    value={updateInput}
                    autoFocus

                  />

  <img src={Update} className="updateBtn" onClick={()=> updateTodo(index)}/>
                  {/* <button  UPDATE</button> */}
                  
        
                  </div>

              ) : (
                <div className= "alertTodo alert alert-primary d-flex justify-content-between f-10">
                  {todo.value}
                  <div className="d-flex gap-2" >
                    <FaTrashAlt

                      className="icon"
                      onClick={() => deleteTodo(index)}
                      size={45}
                    />
                    <FaEdit
                      className="icon"
                      onClick={
                        () => {
                          setIndexNumber(index);
                          editTodo(index);
                          setevent("none")
                        }
                      }
                      size={45}
                    />
                  </div>
                </div>

              )}
            </React.Fragment>
          );
        })}
      </section>
    </section>
  );

};

export default Todo;


// 

