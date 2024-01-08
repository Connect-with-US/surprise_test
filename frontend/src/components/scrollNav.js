// scrollNav.js
import React, { useState, useEffect } from 'react';
import Navbar from './common/Navbar';  // Corrected import path

const ScrollNav = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-${scrolling ? 'blue' : 'transparent'} transition duration-300 ease-in-out`}>
      {/* Your navbar content goes here */}
      Navbar Content
    </nav>
  );
};

export default ScrollNav;
