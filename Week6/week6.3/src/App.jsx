// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   //re-rendering
//   console.log("Rendering the APP");

//   return (
//     <>
//       <button onClick={function(){
//         setCount(count + 1);
//       }}>Count is {count}</button>
//     </>
//   )
// }

// export default App

//week 6.3 useEffect example - real life example CA and tax all

import { useState, useEffect } from "react";

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  //this will safe graud this code and only re-render when app will initial first render.
  //but when you give dependices, when ever that value change it wll re-render.
  useEffect(() => {
    fetch("https://google.com", async (res) => {
      const json = await res.json();
      setBankData({ income: 100 });
      //assume it is {income : 100}
    });
  },[]);

  useEffect(()=>{
    setTimeout(() => {
      setExchangeData({
        returns: 200,
      });
    }, 1000);
  },[])
  

  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

  return <div>Hi there, your income tax returns are {incomeTax}</div>;
}
export default App;
