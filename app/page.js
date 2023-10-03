"use client";
import styles from "./page.module.css";
import Todo from "./components/todo";
import tasks from "./data/tasks";
import { useState } from "react";

export default function Home() {
  const [tasksList, setTasksList] = useState(tasks);

  const deleteTask = (id) => {
    let newTasksList = tasksList.filter((item) => {
      return item.id != id;
    });
    setTasksList(newTasksList);
    console.log(newTasksList);
  };

  // Creating a new task object
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [task, setTask] = useState({
    id: 0,
    title: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask((task.id = tasksList.length + 1));
    setTask((task.title = title));
    setTask((task.description = description));
    setTasksList([...tasksList, task]);
    setTask({
      title: "",
      description: "",
    });
    setTitle("");
    setDescription("");
  };

  return (
    <main className={styles.main}>
      <input
        type="text"
        name="title"
        id="titleBox"
        className="inps"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name="description"
        id="descriptionBox"
        className="inps"
        placeholder="Enter Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="addBtn" onClick={handleSubmit}>
        Add
      </button>

      {tasksList.map((todo) => (
        <Todo
          id={todo.id}
          key={todo.id}
          title={todo.title}
          description={todo.description}
          deleteTask={deleteTask}
        ></Todo>
      ))}
    </main>
  );
}
