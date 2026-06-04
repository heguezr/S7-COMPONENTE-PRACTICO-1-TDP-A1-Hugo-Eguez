import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Card from './components/Card';
import CounterCard from './components/CounterCard';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      
      <Features />
      
      <div className="cards-container">
        <Card />
        <CounterCard />
      </div>

      <Footer />
    </div>
  );
}

export default App;