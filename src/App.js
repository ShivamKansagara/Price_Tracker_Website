import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './MyComponents/Navbar';
import Carousel from './MyComponents/Carousel';
import Accordion from './MyComponents/Accordion';
import About from './MyComponents/About';
import ShowCard from './MyComponents/ShowCard';

function App() {
  return (
    <>
    <div >
    <Navbar/>
    <Routes>
    <Route exact path="/" element={
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
      <Route exact path="/ShowProducts" element={<ShowCard/>}/>
    </Routes>
    </div>
    </>
    
  
  );
}

export default App;
