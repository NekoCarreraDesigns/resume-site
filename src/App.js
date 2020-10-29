import React from "react";
import Header from "./components/Header/index"
import './App.css'
import Navbar from "./components/Navbar/index";
import Inputs from "./components/Inputs/index";

function App() {
  return (
    <div className="resume">
      <Navbar/>
     <Header/>
     <Inputs/>
    </div>
  );
}

export default App;
