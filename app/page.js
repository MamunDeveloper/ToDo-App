"use client";
import styles from "./page.module.css";
import Todo from "./components/todo";
import tasks from "./data/tasks";
import { useState } from "react";

export default function Home() {
  const [tasksList, setTasksList] = useState(tasks);

  const logId = (id) => {
    let newTasksList = tasksList.filter((item) => {
      return item.id != id;
    });
    setTasksList(newTasksList);
    console.log(newTasksList)
  };

  return (
    <main className={styles.main}>
      {tasksList.map((todo) => (
        <Todo
          id={todo.id}
          key={todo.id}
          title={todo.title}
          description={todo.description}
          logId={logId}
        ></Todo>
      ))}
    </main>
  );
}
