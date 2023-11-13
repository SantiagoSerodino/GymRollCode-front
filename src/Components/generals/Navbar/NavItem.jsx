import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({ link,text }) => {
    return (
        <div>
            <li><NavLink to={link}>{text}</NavLink></li>
        </div>
    )
}

export default NavItem