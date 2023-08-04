import React, {useState} from "react";
import './App.css';
import Greet from './components/Greet';
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="App">
      <Greet/>
      <MainPage/>
    </div>
  );
}

export default App;
