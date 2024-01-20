import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        style={{
          padding: "10px",
          margin: "10px",
        }}
        type="text"
        placeholder="title"
        onChange={(e) => {
          const value = e.target.value;
          setTitle(value);
          setTitle("");
        }}
      ></input>
      <br />
      <input
        style={{
          padding: "10px",
          margin: "10px",
        }}
        type="text"
        placeholder="description"
        onChange={(e) => {
          const value = e.target.value;
          setDescription(value);
          setDescription("");
        }}
      ></input>
      <br />

      <button
        style={{
          padding: "10px",
          margin: "10px",
        }}
        onClick={() => {
          fetch("https://localhost:3030/week5-todos", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("Todo Added");
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
