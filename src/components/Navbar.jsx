import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css';

const Navbar = () => {

    const closeOtherSubmenus = (menuContainer, currentSubmenu) => {
        const submenus = menuContainer.querySelectorAll('.submenu');
        submenus.forEach(submenu => {
            if (submenu !== currentSubmenu) {
                submenu.classList.remove('subopen');
                submenu.classList.remove('open');
            }
        });
    };

    useEffect(() => {
        const menuContainer = document.querySelector('.menu');

        document.getElementById('products').addEventListener('click', function (e) {
            e.stopPropagation();
            var dropdown = document.querySelector('.menu');
            dropdown.classList.toggle('open');
        });

        document.addEventListener('click', function () {
            var dropdown = document.querySelector('.menu');
            dropdown.classList.remove('open');
            var submenus = document.querySelectorAll('.submenu');
            submenus.forEach(function (submenu) {
                submenu.classList.remove('open');
            });
        });

        const submenus = document.querySelectorAll('.menu > li > a');
        submenus.forEach(submenu => {
            submenu.addEventListener('click', function (e) {
                e.stopPropagation();
                const parent = submenu.parentElement.querySelector('.submenu');
                closeOtherSubmenus(menuContainer, parent);
                parent.classList.toggle('subopen');
            });
        });
    }, []);

    return (
        <nav>
            <Link to="/"><img src="/assets/logo.webp" alt="logo" width="80px" height="40px" /></Link>
            <div className="hamburger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <ul className="nav-links">
                <li><Link to="/about">ABOUT</Link></li>
                <li className="products" id="products">
                    <a href="#">PRODUCT</a>
                    <ul className="menu">
                        <li>
                            <a href="#">Agricultural Drone</a>
                            <ul className="submenu">
                                <li><Link to="/agr10">AGR 10</Link></li>
                                <li><Link to="/agr16">AGR 16</Link></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Flight Controller</a>
                            <ul className="submenu">
                                <li><Link to="/flight-controller">Xrotor Tek India</Link></li>
                            </ul>
                        </li>
                        <li>
                        <Link to="/Batteries">Batteries</Link>
                            
                        </li>
                    </ul>
                </li>
                <li><Link to="/training">TRAINING</Link></li>
                <li><Link to="/Blog">BLOGS</Link></li>
                <li><Link to="/career">CAREER</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
                <li><button type="button">BOOK NOW</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;
