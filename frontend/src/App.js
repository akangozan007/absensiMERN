import React from 'react';
// css
import 'bootstrap/dist/css/bootstrap.min.css';
// js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginContent from './pages/HomeLogin';
import DashboardContent from './pages/Dashboard';
import './components/assets/css/Login.css';
import { Routes, Route} from 'react-router-dom';

function App() {
return (
  <>
     <Routes>
      {/* HomeLogin page */}
        <Route path="/"
         element=
         {
        <>
        <header className='fixed-top'>
        <Navbar /> 
        </header>
        <main className=''>
          <LoginContent/>
        </main>
        <footer className='fixed-bottom'>
          <Footer/>
        </footer>
        </>
        }/>
        {/* Dashboard page */}
        <Route path="/dashboard"
         element={
        <>
        {/* <header className='fixed-top'>
        <Navbar /> 
        </header> */}
        <main className=''>
          <DashboardContent/>
        </main>
        {/* <footer className='fixed-bottom'>
          <Footer/>
        </footer> */}
        </>
        }/>
     </Routes>
  </>
);
}

export default App;
