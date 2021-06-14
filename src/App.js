import React from 'react'
import Header from './components/Header'
import Ycalculator from './components/Ycalculator'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Ycalculator />
      <Footer />
    </div>
  );
}

export default App;
