import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';

/**
 * Navbar component that displays the navigation bar with logo and navigation links
 * Supports both desktop and mobile views with hamburger menu that transforms to X
 */
const Navbar = () => {
  return (
    <>
      {/* Top black banner with scrolling text */}
      <div className={styles.topBanner}>
        <marquee><span style={{marginLeft:"100px", color:"red"}}>Get extra 10% off</span> <span style={{marginLeft:"400px", color:"red"}}>Get extra 10% off</span> <span style={{marginLeft:"400px", color:"red"}}>Get extra 10% off</span></marquee>
      </div>

      {/* Main navigation with logo and icons */}
      <nav className={styles.mainNav}>
        <div className={styles.logo}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQltaoP3NvdtfMIvYkyYGoRDaol1pg625tkR0hq_uGgtrBfcfDl4fWvnQhrrew6trr9kVs&usqp=CAU"/></div>
        <div className={styles.centerLogo}>LOGO</div>
        <div className={styles.navIcons}>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search" />
            <span className={styles.searchIcon}>🔍</span>
          </div>
          <div className={styles.iconGroup}>
            <span>❤️</span>
            <span>🛍️</span>
            <span>👤</span>
            <select className={styles.langSelect}>
              <option value="en">ENG</option>
              <option value="fr">FRA</option>
              <option value="es">ESP</option>
            </select>
          </div>
        </div>
      </nav>

      {/* Secondary navigation menu */}
      <nav className={styles.secondaryNav}>
        <div className={styles.navLinks}>
          <div className={styles.navLink}>SHOP</div>
          <div className={styles.navLink}>SKILLS</div>
          <div className={styles.navLink}>STORIES</div>
          <div className={styles.navLink}>ABOUT</div>
          <div className={styles.navLink}>CONTACT US</div>
        </div>
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