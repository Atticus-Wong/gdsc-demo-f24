import React from 'react';
import logo from './logo.svg';
import './App.css';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Navbar />
    <div className="flex justify-center min-h-screen">
      <div className="max-w-[1440px] w-full mx-auto test-H1">
        <div className='mx-20 px-4'>
          <Section1 />
          <Section2 />
          <Section3 />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;
