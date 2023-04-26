import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todolist from "./components/Todolist";

function App() {
  const [lists, setLists] = useState([
    { id: 1, text: "Watch React tutorials" },
    { id: 2, text: "Practice" },
    { id: 3, text: "Cook a meal" },
  ]);

  const addTaskItem = (enteredTask) => {
    const updatedTask = { ...enteredTask, id: Math.random().toString()};
    setLists((prevLists)=> [updatedTask, ...prevLists])
  };

  const deleteTaskHandler = (taskId) =>{
    setLists((prevLists)=> prevLists.filter((task)=> task.id !== taskId))
  }
  return (
    <div className="TodoApp">
      <h1>TodoApp</h1>
      <TodoForm onAddTask={addTaskItem} />
      <Todolist lists={lists} onDeleteTask={deleteTaskHandler} />
    </div>
  );
}

export default App;
