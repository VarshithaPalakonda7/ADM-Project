import React from 'react';
import Login from './pages/login';
import Home from "./pages/home";
import Services from './pages/Services';
import AboutUS from './pages/AboutUS';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
// import Switch from "react-switch";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/AboutUS" element={<AboutUS />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

