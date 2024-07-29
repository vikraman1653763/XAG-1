import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop.jsx';
import UpButton from './components/upButton.jsx';
import Home from '/src/components/home.jsx';
import Contact from '/src/components/contact.jsx';
import About from '/src/components/about.jsx';
import AGR16 from './product/AGR16/agr16.jsx';
import FlightController from './product/FlightController/FlightController.jsx';
import Battery from './product/Battery/Battery.jsx';
import BatteryDetails from './product/Battery/BatteryDetails';
import Training from '/src/components/Training.jsx';
import Blog from '/src/components/Blogs.jsx';
import BlogDetails from './blog/BlogDetails';
import Career from './components/Career.jsx';
import Login from './components/Login.jsx';

const App = () => {
  return (
    <Router>
          <ScrollToTop/>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} /> 
            <Route path="/contact" element={<Contact/>} /> 
            <Route path="/agr16" element={<AGR16 />} />
            <Route path="/agr10" element={<AGR16 />} />
            <Route path="/Batteries" element={<Battery />} />
            <Route path="/battery/:ID" element={<BatteryDetails />} />
            <Route path="/flight-controller" element={<FlightController />} />
            <Route path="/training" element={<Training />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path='/Blog/:title' element={<BlogDetails/>}/>
            <Route path="/career" element={<Career />} />
            <Route path='/Login' element={<Login/>}/>
            
          </Routes>
          <Footer />
          <UpButton/>
        </Router>
    
  );
};

export default App;
