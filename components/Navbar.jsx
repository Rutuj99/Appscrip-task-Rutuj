import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';


const Navbar = () => {
  
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
        
      
        <div className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <div className={styles.navLink}>Home</div>
          <div className={styles.navLink}>Products</div>
          <div className={styles.navLink}>About</div>
          <div className={styles.navLink}>Contact</div>
        </div>

    
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
      
      
      <div className={styles.discoverySection}>
        <h1 className={styles.discoveryHeading}>DISCOVER OUR PRODUCTS</h1>
        <p className={styles.discoveryText}>Lorem ipsum dolor sit amet consectetur. Amet est possimus rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </div>
    </>
  );
};

export default Navbar;