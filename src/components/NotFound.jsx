// NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/notFound.css';


const NotFound = () => {
  return (
    <div className='not-container'>
    <div className='not1'>
      <h3>Page Not Found !</h3>
      <p>The page you are looking for does not exist. You may have misstyped the address or the page may have moved.</p>
      <button>
      <Link to="/">Go back to Home</Link>
      </button>
    </div>
    <div className='not2'>
        <h2>404</h2>
    </div>
    </div>
  );
};

export default NotFound;
