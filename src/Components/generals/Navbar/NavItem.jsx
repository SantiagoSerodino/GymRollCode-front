import React from 'react'

const NavItem = ({ texto }) => {
    return (
        <div>
            <li><a href="#">{texto}</a></li>
        </div>
    )
}

export default NavItem