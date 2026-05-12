import React, {useState} from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import {Register} from "../hooks/useAuth"
import { Link } from 'react-router-dom'


const Signup = () => {
   const {handleDetails, handleSignup} = Register()

  return (
    <div>Signup
      <Input placeholder="Enter name" type="text" whenItype={handleDetails} name="username"/>
      <Input placeholder="Enter email" type="email" whenItype={handleDetails} name="email"/>
      <Input placeholder="Enter password" type="password" whenItype={handleDetails} name="password"/>

      <Button oruko="Sign Up" onclick={handleSignup}/>

      <Link to="/">Back to Landing</Link>


    </div>
  )
}

export default Signup