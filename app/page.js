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

  // Deleting a task by its "id"
  const deleteTask = (id) => {
    let newTasksList = tasksList.filter((item) => {
      return item.id != id;
    });
    setTasksList(newTasksList);
    console.log(newTasksList);
  };

  // Adding a new task
  const addTask = (task) => {
    task.id = tasksList.length + 1;
    setTasksList([task, ...tasksList]);
    setShowingFrom(!showingFrom);
  };

  function toggleForm() {
    setShowingFrom(!showingFrom);
    console.log(showingFrom);
  }

  return (
    <main className={styles.main}>
      {showingFrom && <Form addTask={addTask}></Form>}
      {tasksList.map((todo) => (
        <Todo
          id={todo.id}
          key={todo.id}
          title={todo.title}
          description={todo.description}
          deleteTask={deleteTask}
        ></Todo>
      ))}
      <Navbar toggleForm={toggleForm}></Navbar>
    </main>
  );
}
