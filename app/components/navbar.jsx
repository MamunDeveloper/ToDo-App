import React, { useState } from 'react'
import style from '@/app/styles/navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import logo from "@/app/images/logo.png"

function Navbar({ toggleForm }) {

    function handleclick() {
        toggleForm()
    }

    return (
        <ul className={style.navbar}>
            <li>
                <Image src={logo} height={25} width={20} alt='Logo Image' ></Image>
            </li>
            <li>
                <FontAwesomeIcon className={style.nav_icons} icon={faAdd} onClick={handleclick} ></FontAwesomeIcon>
            </li>
            <li>
                <FontAwesomeIcon id={style.user_icon} className={style.nav_icons} icon={faUserAlt}></FontAwesomeIcon>
            </li>

        </ul>
    )
}

export default Navbar