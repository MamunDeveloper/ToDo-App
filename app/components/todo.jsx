"use client";
import React, { useState } from "react";
import style from "@/app/styles/todo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUpDown, faSquare } from "@fortawesome/free-solid-svg-icons";

function Todo({ title, description, id, logId }) {
  const [view, setView] = useState(false);
  const [taskBox, setTaskBox] = useState(false)

  const changeView = () => {
    setView(!view);
    setTaskBox(!taskBox)
  };
  const handleDeleteButton = () => {
    logId(id);
  };

  return (
    <div className={taskBox ? style.show_detail : style.hide_detail}>
      <div className={style.boxes}>{title}</div>
      {view &&
        <>
          <div className={style.boxes}> <p> {description} </p></div>
        </>
      }
      {
        !taskBox && <FontAwesomeIcon onClick={changeView} icon={faUpDown} className={style.arrow_icons} />
      }
      <div className={style.boxes}>
        <FontAwesomeIcon className={style.function_icons} id={style.cheackBox_icon} icon={faSquare} />
        <FontAwesomeIcon className={style.function_icons} id={style.delete_icon} icon={faTrash} onClick={handleDeleteButton} />
      </div>
      {
        taskBox && <FontAwesomeIcon onClick={changeView} icon={faUpDown} className={style.arrow_icons} />
      }

    </div>
  );
}

export default Todo;
