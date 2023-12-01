"use client";
import styles from "./page.module.css";
import Todo from "./components/todo";
import tasks from "./data/tasks";
import { useEffect, useState } from "react";
import Form from "./components/form";
import Navbar from "./components/navbar";
import LoginPage from "./components/loginPage";

export default function Home() {
  const [tasksList, setTasksList] = useState(tasks);
  const [showingFrom, setShowingFrom] = useState(false);
  const [showingLoginPage, setShowingLoginPage] = useState(false);
  const [rotateAddIcon, setRotateAddIcon] = useState(false);
  const [loginIconClicked, setLoginIconClicked] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("taskList")) || [];
    setTasksList(storedData);
  }, []);

  // Deleting a task by its "id"
  const deleteTask = (id) => {
    let newTasksList = tasksList.filter((item) => {
      return item.id != id;
    });
    setTasksList(newTasksList);
    localStorage.setItem("taskList", JSON.stringify(newTasksList));
  };

  // Adding a new task and toggling add icon
  const addTask = (task) => {
    task.id = tasksList.length + 1;
    setTasksList([task, ...tasksList]);
    localStorage.setItem("taskList", JSON.stringify([task, ...tasksList]));
    setShowingFrom(!showingFrom);
    setRotateAddIcon(!rotateAddIcon);
    setShowingFrom(!showingFrom);
    setRotateAddIcon(!rotateAddIcon);
  };

  // Showing form and toggling add icon
  function toggleForm() {
    setShowingFrom(!showingFrom);
    setRotateAddIcon(!rotateAddIcon);
  }

  function toggleLogin() {
    setShowingLoginPage(!showingLoginPage);
    setLoginIconClicked(!loginIconClicked);
  }

  return (
    <main className={styles.main}>
      <Form showingFrom={showingFrom} addTask={addTask}></Form>
      <div className={styles.task_box}>
        {tasksList.map((todo) => (
          <Todo
            id={todo.id}
            key={todo.id}
            title={todo.title}
            description={todo.description}
            deleteTask={deleteTask}
          ></Todo>
        ))}
      </div>
      <Navbar
        toggleForm={toggleForm}
        toggleLogin={toggleLogin}
        rotateAddIcon={rotateAddIcon}
        loginIconClicked={loginIconClicked}
      ></Navbar>
      <LoginPage
        showingLoginPage={showingLoginPage}
        toggleLogin={toggleLogin}
      ></LoginPage>
    </main>
  );
}
