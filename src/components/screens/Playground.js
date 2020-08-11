import React, { useState, Component } from 'react';

import './index.css';
//import { Navbar } from 'reactstrap';
//import { CSSTransition } from 'react-transition-group';


// const ParentComponent = () => {
//     return <h1>I'm the first child!</h1>
// };


//USED COMMAND + K + U to comment all this out!!!

// function FirstChild(){
//     return <h1> This is a child component</h1>
// }

// const FirstChilde = () => {
//     return <h1>This is output for a function</h1>
// }

// function ParentComponente(){
//     return  <h1> Hello test works!
//                 <FirstChild/>
//             </h1>
// }

// class ChildClass extends React.Component {
//     render(){
//         return <h1> THis is output for a CLASS </h1>
//     }
// }

// class ParentComponent extends React.Component {
//     render(){
//         return <h1> Hello test works!
//                     <ChildClass/>
//                 </h1>
//     }
// }

// function ClassOf2022noProps() {
//     return <h1>
//             Class of 2022:
//             <Graduate1/>
//             <Graduate2/>
//             <Graduate3/>
//            </h1>
// }

// function Graduate1(){
//     const h1Style = { color: "#3b5998", fontWeight: "bold" }
//     return <h1 style={ h1Style }> 1: Suzan Boil</h1>
// }

// function Graduate2(){
//     const h1Style = { color: "#3b5998", fontWeight: "bold" }
//     return <h1 style={ h1Style }> 2: Knick Canin</h1>
// }

// function Graduate3(){
//     const h1Style = { color: "#3b5998", fontWeight: "bold" }
//     return <h1 style={ h1Style }> 3: Larry Lobster </h1>
// }


// function ClassOf2022() {
//     return <h1>
//             Class of 2022:
//             <Graduate jit={"1. Suzan Boil"}/>
//             <Graduate jit={"2. Knick Canin"}/>
//             <Graduate jit={"3. Larry Lobster"}/>
//             <Graduate jit ={"4. Kid Cuhdee"}/>
//            </h1>
// }

// function Graduate (props) {
//     const h1Style = { color: "#3b5998", fontWeight: "bold" }
//     return <h1
//             style={ h1Style }>
//             {props.jit}
//         </h1>
// }


// const Graduate = (props) => {
//     const h1Style = { color: "#3b5998", fontWeight: "bold" }
//     return <h1
//             style={ h1Style }>
//             {props.text}
//         </h1>
// }

// function ChangingButton() {
//     const [colorNumber, setColor ] = useState(0);
//     var btnColor;

//     (colorNumber%4 == 0) ? btnColor={backgroundColor:'#20B2AA'}:
//     (colorNumber%4 == 1) ? btnColor={backgroundColor: '#F0FFF0'}:
//     (colorNumber%4 == 2) ? btnColor={backgroundColor: '#D2B48C'}:
//     btnColor={backgroundColor: '#B0C4DE'}

//     return (
//         <div>
//             <p>You clicked on the button {colorNumber} times</p>
//             <button style={btnColor} onClick = {() => setColor(colorNumber + 1)}>
    
//                 Karma, karma, karma, karma, karma chameleon
//             </button>
//         </div>
//     )
// }

// //import React, { Component, useState } from 'react';

// // function ChangingButton2() {

// // 	const [colorNumber, setColor ] = useState(0);
	
// // 	return (
// // 		<div>
// // 			<p>You clicked on the button {colorNumber} times</p>
// // 			<button onClick = {() => setColor(colorNumber + 1)}>
// // 				Karma, karma, karma, karma, karma chameleon
// // 			</button>
// // 		</div>
// // 	)
// // }

function App() {
  return (

    <Navbar>
          
    </Navbar>

  );
}

function Navbar(props) {
  return (
    <nav className="navbare">
      <ul className="navbar-nave"> { props.children }</ul>
    </nav>
  );
}



export default App;


