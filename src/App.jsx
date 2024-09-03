import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop.jsx';
import UpButton from './components/upButton.jsx';
import Home from '/src/components/home.jsx';
import Contact from '/src/components/contact.jsx';
import About from '/src/components/about.jsx';
import AGR16 from './product/AGR16/agr16.jsx';
import AGR10 from './product/AGR10/agr10.jsx';
import FlightController from './product/FlightController/FlightController.jsx';
import Battery from './product/Battery/Battery.jsx';
import BatteryDetails from './product/Battery/BatteryDetails';
import Training from '/src/components/Training.jsx';
import Blog from '/src/components/Blogs.jsx';
import BlogDetails from './blog/BlogDetails';
import Career from './components/Career.jsx';
import Dealer from './components/Dealer.jsx';
import Login from './components/Login.jsx';
import Admin from'./admin/admin.jsx';
import BatteryUpdate from'./admin/BatteryUpdate.jsx';
import BlogUpdate from'./admin/BlogUpdate.jsx';
import CareerUpdate from'./admin/CareerUpdate.jsx';
import BlogList from'./admin/BlogList.jsx';
import CareerList from'./admin/CareerList.jsx';
import FormSuccess from './components/success.jsx'
import axios from 'axios';
const App = () => {

  const fetchAPI = async ()=>{
    const response = await axios.get("http://localhost:8080/")
    console.log(response.data.fruits)
  }

  useEffect(()=>{
    fetchAPI();
  },[])
  return (
    <Router>
          <ScrollToTop/>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} /> 
            <Route path="/contact" element={<Contact/>} /> 
            <Route path="/agr16" element={<AGR16 />} />
            <Route path="/agr10" element={<AGR10 />} />
            <Route path="/Batteries" element={<Battery />} />
            <Route path="/battery/:ID" element={<BatteryDetails />} />
            <Route path="/flight-controller" element={<FlightController />} />
            <Route path="/training" element={<Training />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path='/Blog/:title' element={<BlogDetails/>}/>
            <Route path="/career" element={<Career />}/> 
            <Route path="/Dealer" element={<Dealer />}/>          
            <Route path='/Login' element={<Login/>}/>
            <Route path='/success' element={<FormSuccess/>}/>
            <Route path= '/admin' element={<Admin/>}/>
            <Route path="/admin/blogs" element={<BlogList />} />
            <Route path="/admin/careers" element={<CareerList />} />
            <Route path= '/admin/battery' element={<BatteryUpdate/>}/>
            <Route path= '/admin/blogs/new' element={<BlogUpdate/>}/>
            <Route path= '/admin/careers/new' element={<CareerUpdate/>}/>
          </Routes>
          <Footer />
          <UpButton/>
        </Router>
    
  );
};

export default App;
