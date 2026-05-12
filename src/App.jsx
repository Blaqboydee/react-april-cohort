import React from "react";
import { Routes, Route } from "react-router-dom";
import Hello from "./components/Hello";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Footer } from "./components/Header";
import Landingpage from "./pages/Landingpage";
import { Newcomponent } from "./components/Newcomponent";
import { Todo } from "./components/Todo";
import Signup from "./pages/Signup";
import ColorSchemesExample from "./components/Navbar";

const App = () => {
  return (
    <>
    <ColorSchemesExample/>
      <Routes>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/" element={<Landingpage/>} />
      <Route path="/newcomponent" element={<Newcomponent/>} />
      <Route path="/todo" element={ <Todo/>}/>
    </Routes>
    </>
  
  );
};

export default App;
