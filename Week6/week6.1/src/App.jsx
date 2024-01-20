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
import { useState } from "react";
import "./App.css";
let GLOBAL_ID = 4;
function App(){
  const [todos,setTodos] = useState([{
    id: 1,
    title : "Go to gym",
    description: "Need to go gym at 6pm"
  }, {
    id : 2,
    title : "Buy the Veggies",
    description: "Buy Vegetables at 7pm for dinner"
  }, {
    id : 3,
    title: "Make Dinner",
    description: "Come home at time and prepare dinner"
  }])

  function addTodo(){
    setTodos([...todos, {
      id: GLOBAL_ID,
      title: "New Todo",
      description: "New todo desccription"
    }])
  }
  return (
    <>
    <button onClick={addTodo}>Add todo</button>
    {todos.map((todo,index) => (
      <Todo key={todo.id} title={todo.title} description={todo.description} />
    ))}
    </>
  )
}
function Todo({title, description}){
  return <div>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </div>
}
export default App;