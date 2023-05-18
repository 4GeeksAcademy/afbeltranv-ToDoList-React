// import React, { useState } from "react";

// //include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";



// //create your first component
// const Home = () => {	
// 	const [ToDoText, setToDoText]=useState("");
// 	const [ToDoArray, setToDoArray]=useState(["a","b","c"]);


// 	function AddTask(e){		
// 		setToDoArray([...ToDoArray, ToDoText]);
// 		e.preventDefault();
// 		setToDoText("");
// 	}
// 	function DeleteTask(task){
// 		ToDoArray.filter()		
// 		console.log(task)	

// 	}
// 	return (
// 		<div className="text-center">
// 			<form>
// 				<div className="container">
// 					<div className="row">
// 						<h1>To-Do's</h1>
// 						<div className="form-group col">						
// 							<input type="text" onChange={(e)=>setToDoText(e.target.value)} value={ToDoText} className="form-control" id="ToDoInput" placeholder="Enter To-Do" />							
							
// 						</div>		
// 						<button onClick={AddTask}>Add task</button>										
// 					</div>
// 					<div id="ToDo-list">
// 						<p>{ToDoText}</p>
// 						<p>{ToDoArray}</p>
// 						<div className="container">
// 							{ToDoArray.map((task)=><div> {task} <span id={task} key={task} onClick={() => DeleteTask(task)}><i className="fa-solid fa-xmark"></i></span></div> )}
// 						</div>
// 					</div>					
// 				</div>
// 			</form>
// 		</div>
// 	);	
// };

// export default Home;
