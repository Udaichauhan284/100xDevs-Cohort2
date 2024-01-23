// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [firstTitle, setFirstTitle] = useState("My Name is Udai");

//   function changeTitle(){
//     setFirstTitle("My number is " + (Math.random() * 10));
//   }
//   return (
//     <>
//       <button onClick={changeTitle}>Click TO Change</button>
//       <Header title={firstTitle} />
//       <Header title="Name from App" />
//     </>
//   )
// }
// function Header({title}){
//   return <div>
//     {title}
//   </div>
// }

// export default App

//Here we psuh the state to down TO CHILD

// import { useState } from "react";
// function App(){
//   return (
//     <>
//     <HeaderWithButton />
//     <Header title="Name from APP" />
//     </>
//   )
// }
// function HeaderWithButton(){
//   const [firstTitle, setFirstTitle] = useState("My name is Udai");

//   function changeTitle(){
//     setFirstTitle("My Number is " + (Math.floor(Math.random() * 10)));
//   }

//   return <>
//   <button onClick={changeTitle}>CLick to Change</button>
//   <Header title={firstTitle} /> 
//   </>
// }
// function Header({title}){
//   return <>
//   {title}
//   </>
// }
// export default App

//Using Memoization  useMemo
// import { useState, memo } from 'react'
// import './App.css'
// function App(){
//   const [firstTitle, setFirstTitle] = useState("My name is Udai");

//   function changeTitle(){
//     setFirstTitle("My Number is " + (Math.floor(Math.random() * 10)));
//   }
//   return (
//     <>
//     <button onClick={changeTitle}>Click To Change</button>
//     <Header title= {firstTitle} />
//     <br />
//     <Header title= "My name is Raman from App" />
//     <Header title= "Again my name is Raman from APP" />
//     </>
//   )
// }
// const Header = memo(function({title}){
//   return <div>
//     {title}
//   </div>
// })
// export default App;

//Lets understand Keys in ReactJS
// import { useState } from "react";
// import "./App.css";
// let GLOBAL_ID = 4;
// function App(){
//   const [todos,setTodos] = useState([{
//     id: 1,
//     title : "Go to gym",
//     description: "Need to go gym at 6pm"
//   }, {
//     id : 2,
//     title : "Buy the Veggies",
//     description: "Buy Vegetables at 7pm for dinner"
//   }, {
//     id : 3,
//     title: "Make Dinner",
//     description: "Come home at time and prepare dinner"
//   }])

//   function addTodo(){
//     setTodos([...todos, {
//       id: GLOBAL_ID,
//       title: "New Todo",
//       description: "New todo desccription"
//     }])
//   }
//   return (
//     <>
//     <button onClick={addTodo}>Add todo</button>
//     {todos.map((todo,index) => (
//       <Todo key={todo.id} title={todo.title} description={todo.description} />
//     ))}
//     </>
//   )
// }
// function Todo({title, description}){
//   return <div>
//     <h1>{title}</h1>
//     <h3>{description}</h3>
//   </div>
// }
// export default App;

//Hooks in React JS - useEffect Hook in ReactJS, showing TODO fetching from the server

// import { useState, useEffect } from "react";
// import './App.css';

// function App(){
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetch("https://sum-server.100xdevs.com/todos")
//     .then(async (res) => {
//       const json = await res.json();
//       setTodos(json.todos);
//     })
//   },[]);
//   return (
//     <div>
//       {todos.map((todo, index) => (
//         <Todo key={todo.id} title={todo.title} description={todo.description} />
//       ))}
//     </div>
//   )
// }
// function Todo({title, description}){
//   return <div>
//     <h2>{title}</h2>
//     <h3>{description}</h3>
//   </div>
// }
// export default App;

//Assignment 2- create a component that takes a todo id as input and returns it by fetching it from server. The parent component should have a button, clicking on which the net todo is fetched.

// import { useState, useEffect } from "react";
// import './App.css';

// function App(){
//   const [id,setID] = useState(1);

//   return (
//     <>
//       <button onClick={() => {
//         setID(id + 1)
//       }}>Next</button>
//       <Todo id={id} /> 
//     </>
//   )
// }
// function Todo({id}){
//   const [todo,setTodo] = useState({});

//   useEffect(()=>{
//     fetch("https://sum-server.100xDevs.com/todo?id=" + id)
//     .then(async (res) => {
//       const json = await res.json();
//       setTodo(json.todo);
//     })
//   },[id]);

//   return (
//     <>
//     <h2>{todo.title}</h2>
//     <h3>{todo.description}</h3>
//     </>
//   )
// }
// export default App;

//useCallback 
// import { useState, useCallback } from "react";
// import "./App.css";

// function App(){
//   const [count,setCount] = useState(0);
//   const [todos, setTodos] = useState([]);

//   const increment = () => {
//     setCount((c)=> c+1);
//   };
//   const addTodos = useCallback(()=>{
//     setTodos((t) => [...t, "New Todo"])
//   },[todos]);

//   return (
//     <>
//       <Todos todos={todos} addTodos={addTodos} />
//       <br />
//       Count : {count}
//       <button onClick={increment}>Count +</button>
//     </>
//   )
// }

// function Todos({todos, addTodos}){
//   return (
//     <>
//       {todos.map((todo, index) => {
//         return <h3 key={index}>{todo}</h3>
//       })}
//       <button onClick={addTodos}>Add Todo</button>
//     </>
//   )
// }
// export default App;

