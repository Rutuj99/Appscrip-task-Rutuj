import React from 'react';
import styles from '../styles/ProductListing.module.css';

const ProductGrid = ({ filteredProducts, sortOption, setSortOption }) => {
  return (
    <div className={styles.productsContainer}>
      <div className={styles.sortingBar}>
        <div className={styles.resultsCount}>
          Showing {filteredProducts.length} results
        </div>
        <select 
          className={styles.sortDropdown}
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="default">Sort by: Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      
      <div className={styles.productsGrid}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.productImageContainer}>
              <img 
                src={product.image} 
                alt={product.title} 
                className={styles.productImage} 
              />
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productTitle}>{product.title}</h3>
              <div className={styles.productPrice}>${product.price}</div>
              <div className={styles.productCategory}>{product.category}</div>
              <div className={styles.productRating}>
                <span>★ {product.rating.rate}</span>
                <span>({product.rating.count} reviews)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;