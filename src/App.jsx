import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from '/src/home.jsx';
import Contact from '/src/contact.jsx';
import About from '/src/about.jsx';
import AGR16 from './product/AGR16/agr16.jsx';
import FlightController from './product/FlightController/FlightController.jsx';
import Battery from './product/Battery/Battery.jsx';
import BatteryDetails from './product/Battery/BatteryDetails';
import Training from '/src/Training.jsx';
import Blog from '/src/Blogs.jsx';
import BlogDetails from './blog/BlogDetails';
import Career from './career/Career.jsx';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>} /> 
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/agr16" element={<AGR16 />} />
        <Route path="/agr10" element={<AGR16 />} />
        <Route path="/Batteries" element={<Battery />} />
        <Route path="/battery/:title" element={<BatteryDetails />} />
        <Route path="/flight-controller" element={<FlightController />} />
        <Route path="/training" element={<Training />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path='/Blog/:title' element={<BlogDetails/>}/>
        <Route path="/career" element={<Career />} />

        
      </Routes>
      <Footer />
      <button className="rocketbtn">
        <a href="#"><img src="/assets/rocket.webp" alt="backtotop" width="24px" height="auto" /></a>
      </button>
    </Router>
    
  );
};

export default App;
