import React from 'react';
import styles from '../styles/ProductListing.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Appscrip</h3>
          <p>Your one-stop shop for quality products at affordable prices.</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Contact Us</h3>
          <p>Email: info@appscrip.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Appscrip. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;