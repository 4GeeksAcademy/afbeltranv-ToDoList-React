import React, {useState} from "react";

const ToDo=()=>{
    const[ToDoTask, setToDoTask]=useState("")
    const[ToDoTaskList, setToDoTaskList]=useState([])

return(
    <>
    <div className="container">
    <h1>ToDo List</h1>
    <ul>
        <li><input 
                type="text" 
                onChange={(e)=>setToDoTask(e.target.value)} 
                value={ToDoTask} 
                placeholder="Type your task"
                onKeyDown={(e)=> {if(e.key==="Enter" && ToDoTask!=""){
                    setToDoTaskList(ToDoTaskList.concat(ToDoTask));
                    setToDoTask("");                    
                }}} >
            </input>                
        
        </li>
        {ToDoTaskList.map((task, index)=>
                    (<li key={index}>
                        {task}{" "} <span onClick={() => 
                            setToDoTaskList(
                                ToDoTaskList.filter(
                                    (t, currentIndex)=>
                                    index!=currentIndex))} > <i className="fa-solid fa-trash" ></i></span>
                    </li>))            
        } 
        
        </ul>
        <div>{ToDoTaskList.length} tasks in list</div>
    </div>
    </>
)

}

export default ToDo;
