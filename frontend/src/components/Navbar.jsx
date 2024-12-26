import React from 'react';



function Navbar() {
  return (

           <div className='container-fluid mb-5'>
                  <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span class="fs-4">Nzan's Absensi</span>
                </a>

                <ul class="nav nav-pills">
                    {/* <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">About</a></li> */}
                </ul>
           </div> 
   
  )
}

export default Navbar;
