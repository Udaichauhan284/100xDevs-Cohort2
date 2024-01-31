import { func } from "prop-types";
import {useState} from "react";

function Parent(){
  const [fName, setfName] = useState("udai");
  const [lName, setlName] = useState("chauhan");

  return (
    <>
      <div>This is a Parent Component</div>
      <br />
      <ChildA fName={fName} lName={lName} />
    </>
  )
}
function ChildB( {fName, lName} ){
  return (
    <>
      <h3>This is a child component.</h3>
      <br />
      <h4>{fName}</h4>
      <h4>{lName}</h4>
    </>
  )
}
export default Parent;