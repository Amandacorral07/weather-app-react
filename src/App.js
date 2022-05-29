import React from "react";
import Weather from "./Weather";
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="San Francisco"/>
      <footer>
        This project was coded by Amanda Corral and is 
      <a href="https://github.com/Amandacorral07/weather-app-react" target="_blank" rel="noopener noreferrer"> open-sourced on GitHub</a>
   </footer>
      </div>
      
   </div>
  );
}

export default App;
