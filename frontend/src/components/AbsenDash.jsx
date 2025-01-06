import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function AbsenDash(props) {
    const { AbsenData , session } = props;

  return (
   <>
   <br /><br /><br /><br /><br /><br />
   <div className='container-md container-fluid position-absolute top-100 start-50 translate-middle'>
        <div className='container-fluid bg-dark ms-5' >
            <p className='h1 text-center text-success fw-bolder'>Selamat Datang {session.username}</p>
        </div>
        <div className='container-fluid bg-dark' >
            <p className='h1 text-center text-success fw-bolder'>Progress absen</p>
        </div>
        <div className='container-fluid bg-dark' >
            <p className='h1 text-center text-success fw-bolder'>absen Hari Ini </p>
        </div>
   </div>
   </>
  )
}

export default AbsenDash
