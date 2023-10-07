import React, { useState } from 'react'
import style from '@/app/styles/navbar.module.css'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

function Navbar({ toggleForm }) {

    function handleclick() {
        toggleForm()
    }

    return (
        <ul className={style.navbar}>
            <li>
                <FontAwesomeIcon className={style.nav_icons} icon={faAdd} onClick={handleclick} ></FontAwesomeIcon>
            </li>

        </ul>
    )
}

export default Navbar