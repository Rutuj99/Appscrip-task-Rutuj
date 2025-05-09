import React from 'react';
import styles from '../styles/ProductListing.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTopSection}>
        <div className={styles.footerTopLeft}>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettä muse.</p>
          <div className={styles.newsletter}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className={styles.footerTopRight}>
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
        </div>
      </div>

      <div className={styles.footerBottomSection}>
        <div className={styles.footerBottomLeft}>
          <h3>mettä muse</h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className={styles.footerBottomCenter}>
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className={styles.footerBottomRight}>
          <div className={styles.paymentSection}>
            <h3>mettä muse ACCEPTS</h3>
            <div className={styles.paymentMethods}>
              <img src="https://cdn.worldvectorlogo.com/logos/google-pay-1.svg" alt="Google Pay" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0toPmjEq7ePRHw0S0_Cu4VApZLXVi_NYrw&s" alt="Mastercard" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="PayPal" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mMnJl5hw46QhQFyhvlLsbkvV6PyiN4ImXQ&s" alt="Apple Pay" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;