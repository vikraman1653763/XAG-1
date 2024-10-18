<<<<<<< HEAD
import React, { useEffect, useState,useRef } from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css';
import {  motion } from 'framer-motion';


const navVariants = {
   open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};


=======
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css';
import { motion } from 'framer-motion';
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
};

const menuVariants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};


const hamburgerVariants = {
<<<<<<< HEAD
  open: { rotate: 225 , y: 10,backgroundColor:'#9BF00B' },
=======
  open: { rotate: 45, y: 6 },
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
  closed: { rotate: 0, y: 0 },
};

const middleLineVariants = {
  open: { opacity: 0 },
  closed: { opacity: 1 },
};

const bottomLineVariants = {
<<<<<<< HEAD
  open: { rotate: -225 , y: -6 ,backgroundColor:'#9BF00B'},
=======
  open: { rotate: -45, y: -6 },
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
  closed: { rotate: 0, y: 0 },
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
<<<<<<< HEAD
  const submenuRef = useRef(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if(submenuOpen){
      setSubmenuOpen(false)
    }
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(true);
 

  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if(submenuOpen && submenuRef.current && !submenuRef.current.contains(event.target)){
        setSubmenuOpen(false);
      }
    };
  
    document.addEventListener('mousedown', handleOutsideClick);
  
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [submenuOpen, submenuRef]);


=======

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579

  return (
    <nav>
      <Link to="/">
        <img className="logooimg" src="/assets/logo.webp" alt="logo" />
      </Link>
<<<<<<< HEAD
      
=======
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
      <div className="hamburger" onClick={toggleMenu}>
      <motion.div
          className="line1"
          variants={hamburgerVariants}
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="line2"
          variants={middleLineVariants}
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
<<<<<<< HEAD
          transition={{ duration: 0.7 }}
=======
          transition={{ duration: 0.3 }}
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
        />
        <motion.div
          className="line3"
          variants={bottomLineVariants}
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          transition={{ duration: 0.3 }}
        />
      </div>
<<<<<<< HEAD

      
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/about" onClick={toggleMenu}>ABOUT</Link></li>
        <li className="products">
          <span onClick={toggleSubmenu}>PRODUCT</span>
          <motion.ul
            className="menu"
            variants={menuVariants}
            initial={false}
            animate={submenuOpen ? "open" : "closed"}
            style={{ pointerEvents: submenuOpen ? "auto" : "none" }}
            ref={submenuRef}
          >
            <motion.li variants={itemVariants} >
                <Link to="/agr16" onClick={toggleMenu}>AGR 16</Link>
            </motion.li>
            <motion.li variants={itemVariants} >
              <Link to="/flight-controller" onClick={toggleMenu}>Xrotor&nbsp;Tek&nbsp;India</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link to="/Batteries" onClick={toggleMenu}>Batteries</Link>
            </motion.li>
          </motion.ul>
        </li>
        <motion.li variants={itemVariants}>
        <Link to="/dealer" onClick={toggleMenu}>DEALER&nbsp;PORTAL</Link></motion.li>
        <motion.li variants={itemVariants}>
        <Link to="/training" onClick={toggleMenu}>TRAINING</Link></motion.li>
        <li><Link to="/blog" onClick={toggleMenu}>BLOGS</Link></li>
        <li><Link to="/career" onClick={toggleMenu}>CAREER</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}> CONTACT</Link></li>
        <li className='login-btn' onClick={toggleMenu}><Link to="/">Buy Now</Link></li>
      </ul>
=======
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
  <li><Link to="/about">ABOUT</Link></li>
  <li className="products">
    <span onClick={toggleSubmenu}>PRODUCT</span>
    <motion.ul
      className="menu"
      variants={menuVariants}
      initial={false}
      animate={submenuOpen ? "open" : "closed"}
      style={{ pointerEvents: submenuOpen ? "auto" : "none" }}
    >
      <motion.li variants={itemVariants}>
        <span>Agricultural Drone</span>
        <ul className="submenu">
          <li><Link to="/agr16">AGR 16</Link></li>
        </ul>
      </motion.li>
      <motion.li variants={itemVariants}>
        <Link to="/flight-controller">Xrotor Tek India</Link>
      </motion.li>
      <motion.li variants={itemVariants}>
        <Link to="/Batteries">Batteries</Link>
      </motion.li>
    </motion.ul>
  </li>
  <li><Link to="/Dealer">DEALER&nbsp;PORTAL</Link></li>
  <li><Link to="/training">TRAINING</Link></li>
  <li><Link to="/Blog">BLOGS</Link></li>
  <li><Link to="/career">CAREER</Link></li>
  <li><Link to="/contact">CONTACT</Link></li>
  <li className='login-btn'><Link to="/">Buy Now</Link></li>
</ul>
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579

    </nav>
  );
};

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
