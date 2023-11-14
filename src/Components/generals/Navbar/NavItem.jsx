import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({ link,text,click,classes}) => {
    return (
        <div>
            <li className={classes}>
                <NavLink
                to={link}    
                {...(click ? { onClick: click } : {})}>
                    {text}
                </NavLink>
            </li>
        </div>
    )
}

export default NavItem