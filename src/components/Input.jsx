import React from 'react'

const Input = ({placeholder, type, whenItype, name}) => {
    
    
  return (
    <div>
        <input name={name} placeholder={placeholder} type={type} onChange={whenItype} />
    </div>
  )
}

export default Input