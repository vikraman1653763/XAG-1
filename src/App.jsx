<<<<<<< HEAD
import React, { lazy, Suspense} from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
=======
import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop.jsx';
import UpButton from './components/upButton.jsx';
import Home from '/src/components/home.jsx';
<<<<<<< HEAD
import ProtectedRoute from './components/ProtectedRoute.jsx';
import './style/app.css';
import Exx from './components/exx.jsx';

// Lazy loaded components
const Footer =lazy(()=> import('./components/Footer'))
const About = lazy(() => import('/src/components/about.jsx'));
const Contact = lazy(() => import('/src/components/contact.jsx'));
const AGR16 = lazy(() => import('./product/AGR16/agr16.jsx'));
const AGR10 = lazy(() => import('./product/AGR10/agr10.jsx'));
const Battery = lazy(() => import('./product/Battery/Battery.jsx'));
const BatteryDetails = lazy(() => import('./product/Battery/BatteryDetails'));
const FlightController = lazy(() => import('./product/FlightController/FlightController.jsx'));
const Training = lazy(() => import('/src/components/Training.jsx'));
const Blog = lazy(() => import('/src/components/Blogs.jsx'));
const BlogDetails = lazy(() => import('./blog/BlogDetails'));
const Career = lazy(() => import('./components/Career.jsx'));
const Dealer = lazy(() => import('./components/Dealer.jsx'));
const Login = lazy(() => import('./components/Login.jsx'));
const Admin = lazy(() => import('./admin/admin.jsx'));
const BlogUpdate = lazy(() => import('./admin/BlogUpdate.jsx'));
const CareerUpdate = lazy(() => import('./admin/CareerUpdate.jsx'));
const TestimonialUpdate = lazy(() => import('./admin/testimonialUpdate.jsx'));
const BlogList = lazy(() => import('./admin/BlogList.jsx'));
const CareerList = lazy(() => import('./admin/CareerList.jsx'));
const TestimonialList = lazy(() => import('./admin/testimonialList.jsx'));
const NotFound = lazy(() => import('./components/NotFound.jsx'));
const FormSuccess = lazy(() => import('./components/success.jsx'));

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
      <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/agr16" element={<AGR16 />} />
            <Route path="/agr10" element={<AGR10 />} />
            <Route path="/Batteries" element={<Battery />} />
            <Route path="/battery/:ID" element={<BatteryDetails />} />
            <Route path="/flight-controller" element={<FlightController />} />
            <Route path="/training" element={<Training />} />
            <Route path="/blog" element={<Blog />} />
            <Route path='/blog/:id' element={<BlogDetails />} />
            <Route path="/career" element={<Career />} />
            <Route path="/dealer" element={<Dealer />} />
            <Route path='/login' element={<Login />} />
            <Route path='/success' element={<FormSuccess />} />
            <Route path='/admin' element={<ProtectedRoute element={Admin} />} />
            <Route path='/admin/blogs' element={<ProtectedRoute element={BlogList} />} />
            <Route path='/admin/careers' element={<ProtectedRoute element={CareerList} />} />
            <Route path='/admin/testimonial' element={<ProtectedRoute element={TestimonialList} />} />
            <Route path='/admin/blogs/new' element={<ProtectedRoute element={BlogUpdate} />} />
            <Route path='/admin/careers/new' element={<ProtectedRoute element={CareerUpdate} />} />
            <Route path='/admin/testimonials/new' element={<ProtectedRoute element={TestimonialUpdate} />} />
            <Route path="*" element={<NotFound />} />
            <Route path='ex' element={<Exx/>}/>
          </Routes>
      </main>
      <Footer />
        </Suspense>
      <UpButton />
    </Router>
=======
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
import NotFound from './components/NotFound.jsx'; 
import FormSuccess from './components/success.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import './style/app.css'
const App = () => {


  return (
    <Router>
          <ScrollToTop/>
          <Navbar />
          <main>
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
              <Route path='/Blog/:id' element={<BlogDetails/>}/>
              <Route path="/career" element={<Career />}/> 
              <Route path="/Dealer" element={<Dealer />}/>          
              <Route path='/Login' element={<Login/>}/>
              <Route path='/success' element={<FormSuccess/>}/>
              <Route path='/admin' element={<ProtectedRoute element={Admin} />} />
              <Route path='/admin/blogs' element={<ProtectedRoute element={BlogList} />} />
              <Route path='/admin/careers' element={<ProtectedRoute element={CareerList} />} />
              <Route path='/admin/battery' element={<ProtectedRoute element={BatteryUpdate} />} />
              <Route path='/admin/blogs/new' element={<ProtectedRoute element={BlogUpdate} />} />
              <Route path='/admin/careers/new' element={<ProtectedRoute element={CareerUpdate} />} />
            
              <Route path="*" element={<NotFound />} />

            </Routes>
          </main>
          <Footer />
          <UpButton/>
        </Router>
    
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
  );
};

export default App;
