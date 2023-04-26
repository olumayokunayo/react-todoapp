import React from "react";
import "./TodoList.css";

const Todolist = (props) => {
  const lists = props.lists;
  const listItem = (
    <div>
      {lists.map((list) => (
        <div key={list.id} className="listItem">
          {list.text}{" "}
          <button className="del" onClick={() => props.onDeleteTask(list.id)}>
            DEL
          </button>
        </div>
      ))}
    </div>
  );
  return <div>{listItem}</div>;
};

export default Todolist;
