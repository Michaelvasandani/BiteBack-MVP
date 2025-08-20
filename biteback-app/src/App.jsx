import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FarmersNearYou from './components/FarmersNearYou';
import PopularSellers from './components/PopularSellers';
import ProductCategories from './components/ProductCategories';
import Footer from './components/Footer';
import FarmStorefront from './components/FarmStorefront';

const HomePage = () => (
  <>
    <HeroSection />
    <FarmersNearYou />
    <PopularSellers />
    <ProductCategories />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/farm/:farmId" element={<FarmStorefront />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;