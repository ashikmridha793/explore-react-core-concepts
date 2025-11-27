import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <Device name="Laptop" price="85000"></Device>
      <Device name="Mobile" price="15000"></Device>
      <Device name="Watch" price="500"></Device>
      <Person grade='8' score='84'></Person>
      <Student></Student>
      <Student></Student>
      <Student></Student>
      <Developer></Developer>
    </>
  );
}
function Device(props){
  // console.log(props)
  return <h2>This is a Device: {props.name}, price:{props.price}</h2>
}

function Person(){
  const age = 25;
  const money = 80;
  const person = {
    name: 'sakib', age: 18
  }
  return <h3>I am a {person.name} with age: {age + money}</h3>
}
const {grade, score} = {grade: '8', score: '84'}
function Student(props){
  console.log(props)
  return (
  <div className="stident">
    <h3>This is a student</h3>
    <p>Name:</p>
    <p>Age: </p>
  </div>
  )
}
function Developer(){
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "10px"
  }
  return(
    <div style={developerStyle}>
      <h5>Debo debo</h5>
      <p>Coding: </p>
    </div>
  )
}

export default App;
