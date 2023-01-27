//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


let counter = 0;

function multipleTask() {
	function tick() {
		counter ++;
		let counterarray = counter.toString().padStart(6,0).split('');
		
		const element = ( 
			<div id='main-box'>
				<div className="box fs-1"><i class="far fa-clock"></i></div>
				{
				counterarray.map((count,i) => (
				<div className="box">
					<h2 key={i}>{count}</h2>
				</div>))
				}
			</div>
		)
		ReactDOM.render(element, document.querySelector("#app"));
	}
	setInterval(tick, 1000);
}

multipleTask()

//render your react application
// ReactDOM.render(<Home />, document.querySelector("#app"));
