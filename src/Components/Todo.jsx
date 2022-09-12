import React, { useState } from "react";
import {FcFullTrash} from "react-icons/fc"


const Todo =()=>{
    const [todoItem,setTodoItem]=useState([]);
    const [inputValue,setInputValue]=useState("")
    const addTodo=()=>{
        todoItem.push(inputValue);
        setTodoItem([...todoItem]);
    };
        console.log(inputValue,"inputValueee");

           const [bool,setbool]=useState(true)
           const deleteTodo = ()=>{
            setbool(true)
           }
           
    
    return(
<section className="bg-dark text-white text-center p-4">
            <h1>Todo App List</h1>
            <div className="mt-5 px-4">
                <input type="text" className="form-group form-control" 
                placeholder="Enter todo"value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
                <div className="mt-5 d-flex gap-2 ">
                <button className="btn btn-primary" onClick={addTodo}>Add Todo</button>
                <button  onClick={deleteTodo} className="btn btn-danger">Delete</button>
                </div>
            </div>
            <section className="mt-5 px-4">
                {todoItem.map((todo,index)=>{
                return <div key={index} className="alert alert-primary">{todo}
                <div>
                <FcFullTrash/>
                </div>
                </div>
            })}
            </section>
</section>
            
            );


    };
export default Todo;