import React from 'react'
import "../styles/button.css"

const Button = ({backgroundcolor, width, oruko, className, onclick}) => {

  
  return (
    <div>
        <button className={className} onClick={onclick}>{oruko}</button>
    </div>
  )
}

export default Button