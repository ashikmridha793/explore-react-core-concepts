// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./todo";
import Actor from "./Actor";
import Singer from "./singer";
import BookStor from "./BookStor";

function App() {

  const actors = ['sakib', 'Shoriful, raj', 'josim', 'rubel', 'salman']

  const books = [
    {id: 1, name: 'Physics', price: 299},
    {id: 2, name: 'Math', price: 200},
    {id: 3, name: 'Higher Math', price: 159},
    {id: 4, name: 'Chemistry', price: 499},
    {id: 5, name: 'Biology', price: 399},
  ]

  const singers = [
    {id:1, name: 'dr. Mahfujar rohman', age: 68},
    {id:2, name: 'Eva Rahman', age: 46},
    {id:3, name: 'Shuvro Dev', age: 65},
    {id:4, name: 'Pretom vai', age: 29},
  ]

  return (
    <>
      <h1>Vite + React</h1>

      <BookStore books={books}></BookStore>


      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }



      <Actor name = {'Bappa Raj'}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }



     {/*
      { <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Core concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo>} */
      }

      {/*
      <Device name="Laptop" price="85000"></Device>
      <Device name="Mobile" price="15000"></Device>
      <Device name="Watch" price="500"></Device>
      <Person grade='8' score='84'></Person>
      <Student grade={12} score='98'></Student>
      <Student></Student>
      <Student></Student>
      <Developer></Developer> */
      }
      </>
  );
}
function Device(props) {
  // console.log(props)
  return (
    <h2>
      This is a Device: {props.name}, price:{props.price}
    </h2>
  );
}

function Person() {
  const age = 25;
  const money = 80;
  const person = {
    name: "sakib",
    age: 18,
  };
  return (
    <h3>
      I am a {person.name} with age: {age + money}
    </h3>
  );
}
// const { grade, score } = { grade: "8", score: "84" };
// function Student(grade = 1, score = 0) {
//   console.log(props);
//   return (
//     <div className="stident">
//       <h3>This is a student</h3>
//       <p>Class: {grade}</p>
//       <p>Score: {score}</p>
//     </div>
//   );
// }
// function Developer() {
//   const developerStyle = {
//     margin: "20px",
//     padding: "20px",
//     border: "2px solid purple",
//     borderRadius: "10px",
//   };
//   return (
//     <div style={developerStyle}>
//       <h5>Debo debo</h5>
//       <p>Coding: </p>
//     </div>
//   );
// }

export default App;
