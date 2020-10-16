import React from 'react'
import './Sections.scss'


function Sections({title, children}) {
    return (
        <div className="Sections">
            <h4>{title}</h4>
            {children}
        </div>
    )
}

export default Sections
