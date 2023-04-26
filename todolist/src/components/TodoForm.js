import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const [isValid, setIsValid] = useState(true)

  const inputChangeHandler = (event) => {
    if(enteredTask.trim().length > 0) {
        setIsValid(true)
    }
    setEnteredTask(event.target.value);
  };
const submitHandler = (event) => {
event.preventDefault()
if( enteredTask.trim().length === 0){
    setIsValid(false)
    return
}
const todoData = {
    text: enteredTask
}
// console.log(todoData);
props.onAddTask(todoData)
setEnteredTask('')
}
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className={`form-div ${!isValid ? 'invalid' : ""}`}>
        <input className="input" type="text"  value={enteredTask} onChange={inputChangeHandler} />
        <button>Add task</button>
      </div>
    </form>
  );
};

export default TodoForm;
