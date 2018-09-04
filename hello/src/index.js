import React from 'react';
import ReactDOM from 'react-dom';

// function HelloWorld() {
// 	return (
// 		<div>Hello World?</div>
// 	)
// }

function Hello() {
	return (
		<span>Hello</span>
	);
}

function World() {
	return (
		<span>World</span>
	);
}

//Component functions must return a single element (in this case the outer div);
//Yes you could return an array of elements, however for this example a warning will be logged:
//Elements in an array must have unique key props. React uses the keys to detect alterations to the 
//array's members and update the DOM accordingly.
function HelloWorldComponent() {
	return (
		<div>
			<Hello/> <World/>!
		</div>
	);
}

ReactDOM.render(<HelloWorldComponent/>, document.getElementById('root'));

//JSX is transpiled to JS calls to React module. Syntactic sugar for React.createElement
// function HelloWorldJS() {
// 	return React.createElement(
// 		'h1', //Element name
// 		{}, //Property object
// 		'Hello World!' //First child of the element.
//		//Additional Children are passed as additional arguments
// 	);
// }

// ReactDOM.render(HelloWorldJS(), document.querySelector('#root'));
