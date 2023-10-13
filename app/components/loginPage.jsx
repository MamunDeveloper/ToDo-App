import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import style from "@/app/styles/loginPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function LoginPage({ showingLoginPage, toggleLogin }) {
  const [showPassword, setShowPassword] = useState(false);

  // For taking user information
  const initialUser = { email: "", password: "" };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(initialUser);

  function handleSubmit(e) {
    e.preventDefault();
    if (email === "" || password === "") {
    } else {
      setUser((user.email = email), (user.password = password));
      console.log(user);

      setUser(initialUser);
      setEmail("");
      setPassword("");
      toggleLogin();
    }
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
                type="email"
                placeholder="Enter your email"
                autoComplete="Email"
                className={style.inps}
                id=""
                name=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FontAwesomeIcon
                className={style.login_form_icons}
                icon={faEnvelope}
              ></FontAwesomeIcon>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-passwordff"
                className={style.inps}
                id="password_inp"
                name=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FontAwesomeIcon
                className={style.login_form_icons}
                icon={showPassword ? faEye : faEyeSlash}
                onClick={() => setShowPassword(!showPassword)}
              ></FontAwesomeIcon>
              <motion.button
                className={style.logIn_btn}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgb(0, 0, 0)",
                  color: "rgb(135, 206, 235)",
                }}
                onClick={handleSubmit}
              >
                Log in
              </motion.button>
              <div className={style.new_account_box}>
                <Link href="#">Create a new account</Link> or{" "}
                <motion.button
                  className={style.signUp_btn}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgb(0, 0, 0)",
                    color: "rgb(135, 206, 235)",
                  }}
                  onClick={handleSubmit}
                >
                  Sign Up
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default LoginPage;
