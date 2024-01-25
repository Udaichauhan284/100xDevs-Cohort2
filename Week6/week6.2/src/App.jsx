// import { useState, useEffect } from 'react'
// import './App.css'

// function App() {

//   return (
//     <>
//       <Todo id={2} />
//     </>
//   )
// }
// function Todo({id}){
//   const [todo, setTodo] = useState({});

//   useEffect(() => {
//     fetch("https://sum-server.100xdevs.com/todo?id=" + id)
//     .then(async function(res){
//       const json = await res.json();
//       setTodo(json.todo);
//     })
//   },[id])

//   return <div>
//     <h1>{todo.title}</h1>
//     <h3>{todo.description}</h3>
//   </div>
// }

// export default App

//useMemo

import {memo, useState} from "react";
import "./App.css";
function App(){
  const [count, setCount] = useState(0);

  function onClick(){
    console.log("child clicked");
  }

  return <div>
    <Child onClick={onClick} />
    <button onClick={()=>{
      setCount(count + 1);
    }}>Click Me {count}</button>
  </div>
}

const Child = memo((onClick) => {
  console.log("child render");

  return <div>
    <button onClick={onClick}>Clicked</button>
  </div>
})
export default App;
