import { useContext } from "react";
import { useState } from "react";
import {createContext} from "react";

export const CountContext = createContext();

//App.jsx

function App(){
  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </>
  )
}
function CountRender(){
  const count = useContext(CountContext);
  return (
    <div>
      {count}
    </div>
  )
}