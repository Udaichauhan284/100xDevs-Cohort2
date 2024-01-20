import { useEffect, useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  //using of useEffect for fetching the todos from Database. only one time rendering
  useEffect(() => {
    fetch("https://localhost:3030/week5-todos").then(async (res) => {
      const data = await res.json();
      setTodos(data.todos);
    });
  }, []);

  return (
    <>
      <CreateTodo />
      <Todos todos={todos} />
    </>
  );
}

export default App;
