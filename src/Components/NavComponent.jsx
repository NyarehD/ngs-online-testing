import React from 'react'
import NavStyle from  "../Style/NavComponent.module.sass"
import { FaPhoneAlt } from "react-icons/fa"
import { FaPenFancy } from "react-icons/fa"
import { FaComment } from "react-icons/fa"
import { FaUser } from "react-icons/fa"

function Nav() {
  return (
    <nav className={NavStyle.navContainer}>
        <div className={NavStyle.leftside}>
            <ul>
                <li>
                    <span> <FaPhoneAlt className={NavStyle.phoneIcon}/> </span>

                    <span> <a href="#" className={NavStyle.text}>800 - 123-45-67</a> </span>
                </li>

                <li>
                    <span> <FaPenFancy className={NavStyle.penIcon}/> </span>

                    <span> <a href="#" className={NavStyle.text}>MAXICOM@EXAMPLE.COM</a> </span>
                </li>
            </ul>
        </div>

        <div className={NavStyle.rightside}>
            <ul>
                <li>
                    <span> <FaComment className={NavStyle.commentIcon}/> </span>

                    <span><a href="#" className={NavStyle.text}>REQUEST A QUOTE</a></span>
                </li>

                <li>
                    <span> <FaUser className={NavStyle.userIcon}/> </span>

                    <span><a href="#" className={NavStyle.text}>LOGIN IN / SIGN UP</a></span>
                </li>
                </ul>
        </div>
    </nav>
  )
}

export default Nav