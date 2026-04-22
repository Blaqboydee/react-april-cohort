import React,  { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";

const Hero = () => {

   const [name, setName] = useState("Ade")

   const Changename = () => {
    setName("david")
   }

  //  const [age, setAge] = useState(0)

  //  const [students, setStudents] = useState()

  //  const [student, setStudent] = useState({})


  const students = [
    { name: "Rokibat", height: "6'2" },
    { name: "Darasimi", height: "6'2" },
    { name: "Anu", height: "6'2" },
     { name: "Deborah", height: "6'2" },
      { name: "Taiwo", height: "6'2" },
      { name: "Kehinde", height: "6'2" },
      { name: "Ayo", height: "6'2" }
  ];

  return (
    <>
      <div>Hero</div>
      {students.map((student, index) => (
        <div key={index}>
            <h1>{student.name}</h1>
            <h2>{student.height}</h2>

            <p>Hello {name}</p>

            <button onClick={Changename}>Change name</button>
            <FaArrowCircleDown />

        </div>
      
      ))}
    </>
  );
};

export default Hero;
