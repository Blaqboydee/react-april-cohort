import React from "react";
import "../styles/hello.css";

const Hello = () => {
    const HelloStyles = {
        "backgroundColor" : "green",

    }
    
  return (
    <>
   <div className="hello">Hello</div>
   <div style={{"color" : "red", "fontSize" : "36px"}}>Hello</div>  <div className="hello">Hello</div>
  <div style={HelloStyles}>Hello</div>
    </>

)
};

export default Hello;
