import React from 'react';
import Navbar from './components/Navbar';
import Cover from './components/Cover';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/ContactMe';
import Footer from './components/Footer';

import './App.css';


export default function App(){
  return (
    <div>
  
      <Navbar />

        <Cover />
        <About />
        <Portfolio />
        <Contact />
   
      <Footer />
    
    </div>
  );
}