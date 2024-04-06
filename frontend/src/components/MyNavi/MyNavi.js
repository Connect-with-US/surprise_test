import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../common/Navbar'; // Import your Navbar component
import Footer from '../common/Footer';

const MyNav = ({ children }) => {
    const location = useLocation();
    const [showNavBar, setShowNavBar] = useState(true);

    useEffect(() => {
        setShowNavBar(location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/testpage');
    }, [location]);

    return (
        <div>
            {showNavBar && <Navbar />} {/* Render Navbar only when showNavBar is true */}
            {children}
            {showNavBar && <Footer />} {/* Render Footer only when showNavBar is true */}
        </div>
    );
};

export default MyNav;
