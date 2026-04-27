import React, { useState } from "react";

export const Newcomponent = () => {
  const [collection, setCollection] = useState([]);

  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [level, setLevel] = useState("");

  const handleDetails = () => {
    if (!studentName || !course || !level) {
      return alert("all fields are to be filled");
    }

    const details = {
      studentName,
      course,
      level,
    };

    console.log(details);

    setCollection([...collection, details])
    console.log(collection);
    
  };

  return (
    <>
      <div>
        <input
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="Entername"
          type="text"
        />
        <br />
        <input
          onChange={(e) => setCourse(e.target.value)}
          placeholder="Enter Course"
          type="text"
        />
        <br />
        <input
          onChange={(e) => setLevel(e.target.value)}
          placeholder="Enter Level"
          type="text"
        />
        <br />
        <button onClick={handleDetails}>Submit</button>
        <div>
            {collection.map((student, index)=>(
                <div key={index}>
               <div>
                <h1>S/N</h1>
                <h1>{index + 1}</h1>
                <h1> {student.studentName}</h1>
                <h1>{student.course}</h1>
                <h1>{student.level}</h1>

               </div>
                  
                
                </div>
            )

            )}
        </div>
      </div>
    </>
  );
};
