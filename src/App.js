// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home"; 
import Contact from "./pages/Contact"; 
import Login from "./pages/Login"; 
import Register from "./pages/Register"; 
import Categories from "./pages/Categories"; 
import Products from "./pages/Products"; 





const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />

        
      </Routes>
      <Footer />
    </Router>
    
  );
};

export default App;
