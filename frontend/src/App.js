import React from 'react';
// css
import 'bootstrap/dist/css/bootstrap.min.css';
// js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginContent from './pages/HomeLogin';
import DashboardContent from './pages/Dashboard';
import Logout from './pages/Logout';
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
         <Route path="/dashboard/logout"
         element={
        <>
        <main className=''>
          <Logout/>
        </main> 
        </>
        }/>
          <Route path="/dashboard/absen"
         element={
        <>
        <main className=''>
          <Logout/>
        </main> 
        </>
        }/>
     </Routes>
  </>
);
}

export default App;
