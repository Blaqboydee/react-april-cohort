import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Buttons from '../components/Buttons'
import Example from '../components/Modal'
import Button from '../components/Button'
import Imagediv from '../components/imagediv'

import Image1 from "../assets/imgi_2_graphic-design.png"
import Image2 from "../assets/imgi_3_website.png"
import Image3 from "../assets/imgi_4_mobile.png"
import Imagebox from '../components/Imagebox'

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
      <Button backgroundcolor="red" width="100px" oruko={name} className="firstbutton" onclick={sayHello}/>
      <Button backgroundcolor="green" oruko={names} onclick={sayHi}/>
      <Button backgroundcolor="yellow" oruko={namess}/>
      <Button backgroundcolor="purple" oruko="Adebisi"/>
      <Button backgroundcolor='brown'  width="400px"/>

      <Imagebox image={Image1} text="this is image one"/>
      <Imagebox image={Image2} text="this is image two"/>
      <Imagebox image={Image3} text="this is image three"/>
    </div>
  )
}

export default Landingpage

