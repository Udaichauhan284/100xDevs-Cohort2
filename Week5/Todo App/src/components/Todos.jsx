// export function Todos(){
//   return <div>
//     <h1>Go To Gym</h1>
//     <h3>YOu need to go to gym at 6:00 PM</h3>
//     <button>Mark as Completed</button>
//   </div>
// }

//Above is the example how we have to render it.

export function Todos({todos}){
  return (
    <>
      {todos.map((todo)=>{
        return <div>
          <h1>{todo.title}</h1>
          <h3>{todo.description}</h3>
          <button>{todo.completed === true ? "Completed" : "Mark as Completed"}</button>
        </div>
      })}
    </>
  )
}