//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import ToDo from "./component/ToDo.jsx";

//render your react application
ReactDOM.render(<ToDo />, document.querySelector("#app"));
