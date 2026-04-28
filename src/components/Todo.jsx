import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoArray, setTodoArray] = useState([]);

  const Addtodo = () => {
    if (!todo)
      // return alert("Fill this field")
      return toast.error("Kindly input a todo");

    setTodoArray([...todoArray, todo]);
    console.log(todoArray);

    toast.success("Todo added!!");
  };

  const handleDelete = (index) => {
   const newArray = [...todoArray];

   newArray.splice(index, 1)

   setTodoArray(newArray)
    
  }

  const deleteWithFilter = (index) => {
    console.log(index);
    
   setTodoArray(todoArray.filter((_, i) => i !== index))
  }

  return (
    <>
      <div>Todo</div>
      <h1>What are you doing today?</h1>
      <input
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Todo"
        type="text"
      />
      <button onClick={Addtodo}>Addtodo</button>

      {todoArray.map((todo, index) => (
        <div>
          <h1>{todo}</h1>
          <button>Edit</button>
          {/* <button onClick={() => {handleDelete(index)}}>Delete</button> */}
          <button onClick={() => {deleteWithFilter(index)}}>Delete</button>
        </div>
      ))}

      <ToastContainer />
    </>
  );
};
