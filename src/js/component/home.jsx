import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



//create your first component
const Home = () => {	
	const [ToDoText, setToDoText]=useState("");
	const [ToDoArray, setToDoArray]=useState(["a","b"]);

	const AddTask=(ToDoText)=>{
		setToDoArray(...current, "task:{ToDoText}")
	}
	return (
		<div className="text-center">
			<form>
				<div className="container">
					<div className="row">
						<h1>To-Do's</h1>
						<div className="form-group col">						
							<input type="text" onChange={(e)=>setToDoText(e.target.value)} value={ToDoText} className="form-control" id="ToDoInput" aria-describedby="emailHelp" placeholder="Enter To-Do" />							
							<button onClick={AddTask}>Add task</button>
						</div>												
					</div>
					<div id="ToDo-list">
						<p>{ToDoText}</p>
						<p>{ToDoArray}</p>
					</div>					
				</div>
			</form>
		</div>
	);	
};

export default Home;
