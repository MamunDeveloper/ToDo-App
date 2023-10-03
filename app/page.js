"use client";
import styles from "./page.module.css";
import Todo from "./components/todo";
import tasks from "./data/tasks";
import { useState } from "react";
import Form from "./components/form";

export default function Home() {
  const [tasksList, setTasksList] = useState(tasks);

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
  };

  return (
    <main className={styles.main}>
      <Form addTask={addTask}></Form>
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
