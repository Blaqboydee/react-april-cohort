import React,  {useState} from 'react'

export const Register = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [users, setUsers] = useState([])

  const handleDetails = (e) => {
   const name = e.target.name;
   const value = e.target.value;

   setUserDetails({...userDetails, [name]:value })

   console.log(userDetails);
  }

  const handleSignup = () => {

    const {username, email, password} = userDetails;

    if (!username || !email || !password) {
        return alert("kindly fill all fields")
    }
   
   const updatedUsers = [...users, userDetails]
  
    console.log(updatedUsers)
    setUsers(updatedUsers)
    localStorage.setItem("users", JSON.stringify(updatedUsers))
  }


  return {
    handleDetails, handleSignup
  }
  
}

