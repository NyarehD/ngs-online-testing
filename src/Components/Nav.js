import React from 'react'
import styles from  "../sass/style.module.sass"
import { FaPhoneAlt } from "react-icons/fa"
import { FaPenFancy } from "react-icons/fa"
import { FaComment } from "react-icons/fa"
import { FaUser } from "react-icons/fa"

function Nav() {
  return (
    <nav className={styles.navContainer}>
        <div className={styles.leftside}>
            <ul>
                <li>
                    <span> <FaPhoneAlt className={styles.phoneIcon}/> </span>

                    <span> <a href="#" className={styles.text}>800 - 123-45-67</a> </span>
                </li>

                <li>
                    <span> <FaPenFancy className={styles.penIcon}/> </span>

                    <span> <a href="#" className={styles.text}>MAXICOM@EXAMPLE.COM</a> </span>
                </li>
            </ul>
        </div>

        <div className={styles.rightside}>
            <ul>
                <li>
                    <span> <FaComment className={styles.commentIcon}/> </span>

                    <span><a href="#" className={styles.text}>REQUEST A QUOTE</a></span>
                </li>

                <li>
                    <span> <FaUser className={styles.userIcon}/> </span>

                    <span><a href="#" className={styles.text}>LOGIN IN / SIGN UP</a></span>
                </li>
                </ul>
        </div>
    </nav>
  )
}

export default Nav