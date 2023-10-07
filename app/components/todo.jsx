"use client";
import React, { useState } from "react";
import style from "@/app/styles/todo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUpDown, faSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

function Todo({ title, description, id, deleteTask }) {
  const [view, setView] = useState(false);
  const [taskBox, setTaskBox] = useState(false)
  const [taskCompleted, setTaskCompleted] = useState(false)

  const changeView = () => {
    setView(!view);
    setTaskBox(!taskBox)
  };
  const handleDeleteButton = () => {
    deleteTask(id);
  };
  const handleTaskComplete = () => {
    setTaskCompleted(true)
  };

  return (
    <div className={taskBox ? style.show_detail : style.hide_detail}
      animate={{ scale: 1 }}
      transition={{ duration: 2 }}
    >
      <div className={style.boxes} id={style.title_box}>{title}</div>
      {view &&
        <>
          <div className={style.boxes}> <p> {description} </p></div>
        </>
      }

      {/* Arrow icon */}
      {
        !taskBox && <FontAwesomeIcon onClick={changeView} icon={faUpDown} className={style.arrow_icons} />
      }

      {/* Complete and delete icons  */}
      <div className={style.boxes} id={style.icons_box}>

        {
          taskCompleted ? <FontAwesomeIcon className={style.function_icons} icon={faSquareCheck} /> : <FontAwesomeIcon className={style.function_icons} id={style.cheackBox_icon} icon={faSquare} onClick={handleTaskComplete} />
        }

        <FontAwesomeIcon className={style.function_icons} id={style.delete_icon} icon={faTrash} onClick={handleDeleteButton} />
      </div>

      {/* Arrow icon */}
      {
        taskBox && <FontAwesomeIcon onClick={changeView} icon={faUpDown} className={style.arrow_icons} />
      }

    </div>
  );
}

export default Todo;
