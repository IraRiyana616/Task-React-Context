import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/header/Navbar';
import Home from './pages/home/Home';
import About from './pages/about_us/About';
import Services from './pages/service/Service';
import Media from './pages/media/Media';
import Contacts from './pages/contact/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </Router>
  );
};

export default App;
