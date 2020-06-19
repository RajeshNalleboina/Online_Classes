import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greeting';
import Count from './Counter';

function App() {
  return (
   <div className="App">
      <h1>Welcome to APSSDC</h1>
      <h2> Web Development Using React JS</h2>
      {/* <Greet></Greet> */}
      <Count />
   </div>
  );
}



export default App;