import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './MyComponents/Navbar';
import Carousel from './MyComponents/Carousel';
import Accordion from './MyComponents/Accordion';
import About from './MyComponents/About';

function App() {
  return (
    <>
    <div >
    <Navbar/>
    <Routes>
    <Route path="/" element={
      <div>
              <div style={{ backgroundColor: '#000000' }}>
              <Carousel />
              </div>
              <div style={{ backgroundColor: '#FFFF00' }}>
              <Accordion />
              </div>
      </div>
            
          } />
      <Route exact path="/about" element={<About/>} />
    </Routes>
    </div>
    </>
    
  
  );
}

export default App;
