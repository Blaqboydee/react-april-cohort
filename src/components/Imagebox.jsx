import React from 'react'

const Imagebox = ({image, text}) => {
  return (
    <div>
        <img src={image} alt="" />
        <h1>{text}</h1>
    </div>
  )
}

export default Imagebox