import React from 'react';
import Login from './modules/login';
// import Navbar from './components/Navbar';
import Home from "./modules/home";
import {BrowserRouter as Routes, Router, Route} from "react-router-dom";
// import Switch from "react-switch";

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
       
          <Route path="/" exact component={Login}/>
      </Routes> 
      </Router>
      <Home />
      <Login />
    </div>
  );
};

export default App;

