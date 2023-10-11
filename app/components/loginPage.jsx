import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import style from "@/app/styles/loginPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function LoginPage({ showingLoginPage, toggleLogin }) {
  function handleSubmit(e) {
    e.preventDefault();
    toggleLogin();
  }

  return (
    <AnimatePresence>
      {showingLoginPage && (
        <div className={style.login_page_container}>
          <motion.div
            className={style.form_box}
            key="box"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 50, opacity: 1 }}
            exit={{ scale: 0, opacity: 0, transition: { delay: 0.1 } }}
            whileHover={{ scale: 1.1 }}
          >
            <form>
              <input
                type="text"
                className={style.inps}
                name=""
                id=""
                placeholder="Enter your email"
                autoComplete="Email"
              />
              <FontAwesomeIcon
                className={style.login_form_icons}
                icon={faEnvelope}
              ></FontAwesomeIcon>
              <input
                type="password"
                className={style.inps}
                name=""
                id="password_inp"
                placeholder="Enter your password"
                autoComplete="current-passwordff"
                required
              />
              <FontAwesomeIcon
                className={style.login_form_icons}
                icon={faLock}
              ></FontAwesomeIcon>
              <motion.button
                onClick={handleSubmit}
                className={style.logIn_btn}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgb(135, 206, 235)",
                  color: "rgb(8, 8, 22)",
                }}
              >
                Log in
              </motion.button>
              <div className={style.new_account_box}>
                <Link href="#">Create a new account</Link> or{" "}
                <motion.button className={style.signUp_btn}>Sign Up</motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default LoginPage;
