import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '@/app/styles/form.module.css'
import { useState } from "react";

function Form({ addTask }) {
    let initialObject =
    {
        id: 0,
        title: "",
        description: "",
    }

    // Creating a new task object
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [task, setTask] = useState(initialObject);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTask((task.title = title));
        setTask((task.description = description));

        addTask(task)
        setTask(initialObject);
        setTitle("");
        setDescription("");
    };

    return (
        <form className={style.form_box}>
            <input
                type="text"
                name="title"
                id="titleBox"
                className={style.inps}
                placeholder="Enter task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                name="description"
                id="descriptionBox"
                className={style.inps}
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button className={style.addBtn} onClick={handleSubmit}>
                Add
            </button>
        </form>
    )
}

export default Form