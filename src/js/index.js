//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


let counter = 0;
let interval = 0;

function multipleTask() {
	function tick() {
		counter ++;
		let counterarray = counter.toString().padStart(6,0).split('');
		
		const element = ( 
			<>
				<div id='main-box'>
					<div className="box fs-1"><i class="far fa-clock"></i></div>
					{
					counterarray.map((count,i) => (
					<div className="box">
						<h2 key={i}>{count}</h2>
					</div>))
					}
				</div>
				<div className="tasks d-flex justify-content-around mt-3">
					<button className="btn btn-danger p-2" onClick={stop}>Stop</button>
					<button className="btn btn-primary p-2" onClick={resume}>Resume</button>
					<button className="btn btn-success p-2" onClick={reset}>Reset</button>
				</div>
			</>
		)
		ReactDOM.render(element, document.querySelector("#app"));
	}

	let timer = setInterval(tick, 1000);

	const reset = () => {
		counter = 0;
		clearInterval(timer);
		clearInterval(interval);
		interval = setInterval(tick, 1000);
	}
	
	const resume = () => {
		clearInterval(timer);
		clearInterval(interval);
		interval = setInterval(tick, 1000);
	}

	const stop = () => {
		clearInterval(timer);
		clearInterval(interval);
	}
}

multipleTask()

//render your react application
// ReactDOM.render(<Home />, document.querySelector("#app"));
