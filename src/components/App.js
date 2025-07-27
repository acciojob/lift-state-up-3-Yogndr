
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
  const[selectedOption,setselectedOption]=useState("");

    return (
    <div className="parent">
      <div style={{backgroundColor:"lightgreen", width:1000, height:800}}>
      <h1 >Parent Component</h1>
      <div style={{backgroundColor:"red", width:900}}>
      <Child number={1} setoption={setselectedOption} />
      </div>
      <div style={{backgroundColor:"yellow", width:900}}>
      <Child number={2} setoption={setselectedOption} />
      </div>
      <p>Selected Option: {selectedOption} </p>
      </div>
    </div>
  )
}

export default App
