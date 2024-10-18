import React, { lazy, Suspense} from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop.jsx';
import UpButton from './components/upButton.jsx';
import Home from '/src/components/home.jsx';
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
  );
};

export default App;
