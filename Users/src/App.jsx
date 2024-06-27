import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import Contact from './Components/Contact.jsx';
import SelectRole from './Components/selectrole.jsx';
import patientSignUp from './Components/Paitent/patientsignup.jsx';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/selectrole" element={<SelectRole />} />
        <Route path="/Paitent/signup" element={<patientSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
