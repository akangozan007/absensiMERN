import React from 'react';
// css
import 'bootstrap/dist/css/bootstrap.min.css';
// js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginContent from './pages/HomeLogin';
import './components/assets/css/Login.css';


function App() {
  return (
    <>
    {/* navbar */}
    <header className='fixed-top'>
    <Navbar />
    </header>
    {/* content */}
    <main className=''>
    <LoginContent/>
    </main>
    {/* footer */}
    <footer className='fixed-bottom'>
    <Footer/>
    </footer>
    </>
  );
}

export default App;
