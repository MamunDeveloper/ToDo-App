import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '@/app/styles/form.module.css'
import { useState } from "react";

function Form({ addTask, showingFrom }) {
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
        <AnimatePresence>
            {showingFrom &&
                <div className={style.form_section}>
                    <motion.form className={style.form_box}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0, transition: { type: "tween" } }}
                        transition={{ duration: 0.5, type: "spring", damping: 10, }}
                    >
                        <input
                            type="text"
                            name="title"
                            id="titleBox"
                            className={style.inps}
                            placeholder="Enter task"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea
                            type="text"
                            name="description"
                            id={style.descriptionBox}
                            className={style.inps}
                            placeholder="Enter Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <motion.button className={style.addBtn} onClick={handleSubmit} whileHover={{ scale: 1.1 }} >
                            Add
                        </motion.button>
                    </motion.form>
                </div>
            }
        </AnimatePresence>


    )
}

export default Form