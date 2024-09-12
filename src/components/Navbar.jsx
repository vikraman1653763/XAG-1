import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css';
import { motion } from 'framer-motion';

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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <nav>
      <Link to="/">
        <img className="logooimg" src="/assets/logo.webp" alt="logo" />
      </Link>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line1 ${isOpen ? 'open' : ''}`}></div>
        <div className={`line2 ${isOpen ? 'open' : ''}`}></div>
        <div className={`line3 ${isOpen ? 'open' : ''}`}></div>
      </div>
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

    </nav>
  );
};

export default Navbar;
