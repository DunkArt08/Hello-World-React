import React from "react";
import Home from "./paginas/home/home"; 
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './paginas/login/login';
import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/footer';
//import React, { useState } from "react"; 

function App() {
  return(
    <>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;