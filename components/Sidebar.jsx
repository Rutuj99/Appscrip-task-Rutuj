import React from 'react';
import styles from '../styles/ProductListing.module.css';

const Sidebar = ({ 
  categories, 
  selectedCategories, 
  handleCategoryChange, 
  sidebarOpen, 
  toggleSidebar
}) => {
  return (
    <div className={`${styles.filterSidebar} ${sidebarOpen ? '' : styles.filterSidebarClosed}`}>
      <button className={styles.sidebarToggle} onClick={toggleSidebar}>
        {sidebarOpen ? '←' : '→'}
      </button>
      
      <div className={styles.filterSection}>
        <h3 className={styles.filterTitle}>Categories</h3>
        <div className={styles.filterOptions}>
          {categories.map((category) => (
            <label key={category} className={styles.filterOption}>
              <input
                type="checkbox"
                className={styles.filterCheckbox}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </label>
          ))}
        </div>
      </div>
      
      <div className={styles.filterSection}>
        <h3 className={styles.filterTitle}>Price Range</h3>
        <div className={styles.filterOptions}>
          <label className={styles.filterOption}>
            <input type="checkbox" className={styles.filterCheckbox} />
            Under $25
          </label>
          <label className={styles.filterOption}>
            <input type="checkbox" className={styles.filterCheckbox} />
            $25 - $50
          </label>
          <label className={styles.filterOption}>
            <input type="checkbox" className={styles.filterCheckbox} />
            $50 - $100
          </label>
          <label className={styles.filterOption}>
            <input type="checkbox" className={styles.filterCheckbox} />
            Over $100
          </label>
        </div>
      </div>
      
      <div className={styles.filterSection}>
        <h3 className={styles.filterTitle}>Rating</h3>
        <div className={styles.filterOptions}>
          <label className={styles.filterOption}>
            <input type="checkbox" className={styles.filterCheckbox} />
            4 Stars & Above
          </label>
          <label className={styles.filterOption}>
            <input type="checkbox" className={styles.filterCheckbox} />
            3 Stars & Above
          </label>
          <label className={styles.filterOption}>
            <input type="checkbox" className={styles.filterCheckbox} />
            2 Stars & Above
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;