import React from 'react'
import './Menu.scss'

function Menu({icon, text}) {
    return (
        <div className="menu">
            <div className="menu__icon">
                {icon}
            </div>
            <div className="menu__text">
                {text}
            </div>
        </div>
    )
}

export default Menu
