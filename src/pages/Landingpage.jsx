import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Buttons from '../components/Buttons'
import Example from '../components/Modal'
import Button from '../components/Button'


import Image1 from "../assets/imgi_2_graphic-design.png"
import Image2 from "../assets/imgi_3_website.png"
import Image3 from "../assets/imgi_4_mobile.png"
import Imagebox from '../components/Imagebox'
import Nav from '../components/Navbar'
import ColorSchemesExample from '../components/Navbar'

const Landingpage = () => {
  
  const [name , setName] = useState("Abu")
  const [names , setNames] = useState("Anu")
  const [namess, setNamess] = useState("Kayode")

  const sayHello = () => {
    alert("hello")
  }


    const sayHi = () => {
    alert("hi")
  }

  return (
    <div>
      {/* <ColorSchemesExample/> */}
      <h1>Hello, This is Landing page </h1>
      <Link to="/signup">Sign Up</Link>
    </div>
  )
}

export default Landingpage

