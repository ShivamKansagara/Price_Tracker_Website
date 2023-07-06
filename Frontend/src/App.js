import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./MyComponents/Navbar";
import Carousel from "./MyComponents/Carousel";
import About from "./MyComponents/About";
import ShowCard from "./MyComponents/ShowCard";
import Content from "./MyComponents/Content";
import Footer from "./MyComponents/Footer";
import LoginSignUp from "./MyComponents/LoginSignUp";

// #c5d5cb
// #9fa8a3
// #e3e0cf

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <div style={{ backgroundColor: "#000000" }}>
                  <Carousel />
                </div>
                <div style={{ backgroundColor: "#000000" }}>
                  <Content />
                </div>
              </div>
            }
          />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/ShowProducts" element={<ShowCard />} />
          <Route exact path="/Login_SignUp" element={<LoginSignUp />}></Route>
        </Routes>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
