import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/Actions/Actions";
import style from "./TodoForm.module.css";

import { IoAddOutline } from "react-icons/io5";

function TodoForm() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    // console.log(input);
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className={style.todo__form}>
      {/* <div className={style.todo__section}> */}

      <input
        type="text"
        placeholder="Add a todo"
        name="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.todo__input}
      />
      <button className={style.todo__button} onClick={handleSubmit}>
        <IoAddOutline />
      </button>
      {/* </div> */}
    </div>
  );
}

export default TodoForm;
