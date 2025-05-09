import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/ProductListing.module.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

export default function ProductListing({ products }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState('default');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  

  const categories = [...new Set(products.map(product => product.category))];
  
  
  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => 
        selectedCategories.includes(product.category)
      ));
    }
  }, [selectedCategories, products]);
  
  // Sort products based on selected option
  useEffect(() => {
    let sortedProducts = [...filteredProducts];
    
    switch(sortOption) {
      case 'price-low':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      default:
        // Default sorting (no change)
        break;
    }
    
    setFilteredProducts(sortedProducts);
  }, [sortOption]);
  
  // Handle category filter change
  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      // Responsive behavior handling
      if (window.innerWidth > 768) {
        setSidebarOpen(true);
      }
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Product Listing | Appscrip</title>
        <meta name="description" content="Browse our collection of products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Navigation Bar */}
        <Navbar />
        
        <div className={styles.content}>
          {/* Filter Sidebar */}
          <Sidebar 
            categories={categories}
            selectedCategories={selectedCategories}
            handleCategoryChange={handleCategoryChange}
            sidebarOpen={sidebarOpen}
            toggleSidebar={toggleSidebar}
          />
          
          {/* Products Grid */}
          <ProductGrid 
            filteredProducts={filteredProducts}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
    
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: {
        products: [],
      },
    };
  }
}