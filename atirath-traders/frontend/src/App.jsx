// src/App.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Import Provider
import { ProductsProvider } from './context/ProductsContext';

// Components
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import BrandsPage from './pages/BrandsPage'
import BlogPage from './pages/BlogPage';
import BlogDetails from './pages/BlogDetails';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ProductsProvider>
      <ScrollToTop />
      <TopBar />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>

      <Footer />
    </ProductsProvider>
  );
}

export default App;