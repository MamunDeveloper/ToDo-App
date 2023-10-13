import React, { useState } from "react";
import style from "@/app/styles/navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/app/images/logo.png";

function Navbar({ toggleForm, toggleLogin, rotateAddIcon, loginIconClicked }) {
  function handleclick() {
    toggleForm();
  }

  return (
    <ul className={style.navbar}>
      <li>
        <Image
          src={logo}
          height={25}
          width={20}
          alt="Logo Image"
          priority
        ></Image>
      </li>
      <motion.li
        animate={{
          rotate: rotateAddIcon ? 45 : 0,
          color: rotateAddIcon ? "rgb(255, 0, 0)" : "rgb(255, 255, 255)",
        }}
      >
        <FontAwesomeIcon
          className={style.nav_icons}
          icon={faAdd}
          onClick={handleclick}
        ></FontAwesomeIcon>
      </motion.li>
      <motion.li
        animate={{
          color: loginIconClicked ? "rgb(255, 0, 0)" : "rgb(255, 255, 255)",
        }}
      >
        <FontAwesomeIcon
          id={style.user_icon}
          className={style.nav_icons}
          icon={faUserAlt}
          onClick={() => toggleLogin()}
        ></FontAwesomeIcon>
      </motion.li>
    </ul>
  );
}

export default Navbar;
