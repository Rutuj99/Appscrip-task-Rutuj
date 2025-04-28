import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';

/**
 * Navbar component that displays the navigation bar with logo and navigation links
 * Supports both desktop and mobile views with hamburger menu that transforms to X
 */
const Navbar = () => {
  // State to track if mobile menu is open
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <div className={styles.logo}>Appscrip</div>
        </div>
        
        {/* Navigation links - always visible on desktop, conditionally visible on mobile */}
        <div className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <div className={styles.navLink}>Home</div>
          <div className={styles.navLink}>Products</div>
          <div className={styles.navLink}>About</div>
          <div className={styles.navLink}>Contact</div>
        </div>

        {/* Hamburger menu that transforms to X when mobile menu is open */}
        <button 
          className={`${styles.hamburgerMenu} ${mobileMenuOpen ? styles.open : ''}`} 
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      
      {/* Product discovery section */}
      <div className={styles.discoverySection}>
        <h1 className={styles.discoveryHeading}>DISCOVER OUR PRODUCTS</h1>
        <p className={styles.discoveryText}>Lorem ipsum dolor sit amet consectetur. Amet est possimus rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </div>
    </>
  );
};

export default Navbar;