import React, { useState } from "react";
import {FcEditImage, FcFullTrash} from "react-icons/fc"


const Todo =()=>{
    const [todoItem,setTodoItem]=useState([]);
    const [inputValue,setInputValue]=useState("")
    const [indexNumber,setIndexNumber,]=useState("")
    console.log(indexNumber,"indexNumber");
    const addTodo=()=>{
        todoItem.push(inputValue);
        setTodoItem([...todoItem]);
    };
        console.log(inputValue,"inputValueee");

            // delete All list
           const [bool,setbool]=useState(true)
           const deleteAll = ()=>{
            setTodoItem([])
           }
                // 

        //    delete 1 Todo list 
           const deleteTodo = (index) => {
            console.log("delete todo", index);
            // splice 1st argument khn sy delete krna hai or 2 argument kitni value delete krni hai
            todoItem.splice(index, 1);
            setTodoItem([...todoItem]);
          };
                    //   
                // updatetodo
            const updateTodo = (index) => {
                todoItem.splice(index,1,updateInput);
                setTodoItem([...todoItem]);
                setIndexNumber("");
                // setupdateInput("");
            }

            

                // 
         
    return(
<section className="bg-dark text-white text-center p-4">
            <h1>Todo App List</h1>
            <div className="mt-5 px-4">
                <input type="text" className="form-group form-control" 
                placeholder="Enter todo"value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
                <div className="mt-5 d-flex gap-2 ">
                <button className="btn btn-primary" onClick={addTodo}>Add Todo</button>
                <button  onClick={deleteAll} className="btn btn-danger">Delete All</button>

                </div>
            </div>
    <section className="mt-5 px-4">
         {todoItem.map((todo,index)=>{
         return <React.Fragment key={index}> 
    {indexNumber === index ? <div>
        
        <input 
        //  onChange={(e)=>setUpdateInput(e.target.value)} 
        value={updateInput} 
        className="form-control form-group my-3" />
    
       <button onClick={()=>updateTodo(index)}
        className="btn btn-primary my-2">
        Update
   </button>
   </div>
         :<div className="alert alert-primary d-flex justify-content-between">  
         {todo} 
         <div>
         <FcFullTrash onClick={()=>deleteTodo(index)} size={50}/>
         <FcEditImage onClick={()=>setIndexNumber(index)} size={50}/>
         </div>
         </div>
    }
         </React.Fragment>
            })}
            </section>
</section>
            
);


    };
export default Todo;