import React from 'react';
import './App.css';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Add from './Add';
import NavBar from './NavBar';




function App() {
  
  
  return (
    <>
     <NavBar/>
      <Routes>
         <Route path="/add" element={<Add/>} />
         <Route path="/home" element={<Home/>} />
      </Routes>
    </>
        
  );
}

export default App;
