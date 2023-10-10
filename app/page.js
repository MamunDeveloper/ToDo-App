"use client";
import styles from "./page.module.css";
import Todo from "./components/todo";
import tasks from "./data/tasks";
import { useState } from "react";
import Form from "./components/form";
import Navbar from "./components/navbar";

export default function Home() {
  const [tasksList, setTasksList] = useState(tasks);
  const [showingFrom, setShowingFrom] = useState(false);
  const [rotateAddIcon, setRotateAddIcon] = useState(false);

  // Deleting a task by its "id"
  const deleteTask = (id) => {
    let newTasksList = tasksList.filter((item) => {
      return item.id != id;
    });
    setTasksList(newTasksList);
    console.log(newTasksList);
  };

  // Adding a new task and toggling add icon
  const addTask = (task) => {
    task.id = tasksList.length + 1;
    setTasksList([task, ...tasksList]);
    setShowingFrom(!showingFrom);
    setRotateAddIcon(!rotateAddIcon);
  };

  // Showing form and toggling add icon
  function toggleForm() {
    setShowingFrom(!showingFrom);
    setRotateAddIcon(!rotateAddIcon);
  }

  return (
    <main className={styles.main}>
      <div className={styles.form_section}>
        {showingFrom && <Form addTask={addTask}></Form>}
      </div>
      {tasksList.map((todo) => (
        <Todo
          id={todo.id}
          key={todo.id}
          title={todo.title}
          description={todo.description}
          deleteTask={deleteTask}
        ></Todo>
      ))}
      <Navbar toggleForm={toggleForm} rotateAddIcon={rotateAddIcon}></Navbar>
    </main>
  );
}
