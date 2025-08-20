import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FarmersNearYou from './components/FarmersNearYou';
import PopularSellers from './components/PopularSellers';
import ProductCategories from './components/ProductCategories';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FarmersNearYou />
        <PopularSellers />
        <ProductCategories />
      </main>
      <Footer />
    </div>
  );
}

export default App;