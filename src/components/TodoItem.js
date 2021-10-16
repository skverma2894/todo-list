import React from "react";
import { MdOutlineDelete } from "react-icons/md";

import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/Actions/Actions";
import style from "./TodoItem.module.css";

function TodoItem(props) {
  const dispatch = useDispatch();

  return (
    <div className={style.item} key={props.item.id}>
      <p>{props.item.data}</p>
      <button
        className={style.delete__btn}
        onClick={() => dispatch(deleteTodo(props.item.id))}
      >
        <MdOutlineDelete />
      </button>
    </div>
  );
}

export default TodoItem;
