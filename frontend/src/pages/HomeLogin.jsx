import React from 'react'

function Home() {
  return (
    <>
    <div className='container-fluid position-absolute top-50 start-50 translate-middle p-5'>
    <div class="row">
          <div class="col-lg-8 col-12 d-md-block d-none">
                <p className='display-1 text-break'>
                  Aplikasi Absensi
                </p>
                <p className='display-5 text-break'>
                  Gratis .. tak berlisensi untuk kebutuhan sekolah
                </p>
          </div>
          <div class="col-lg-4 col-12 form-login p-5">
            <form className='m-5 rounded rounded-5'>
            {/* <img class="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
            <h1 class="h3 mb-3 fw-normal textLogin">Laman Login</h1>

            <div class="form-floating">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
              <label for="floatingPassword">Password</label>
            </div>

            <div class="form-check text-start my-3">
              <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">
                Remember me
              </label>
            </div>
            <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
          </form>
          </div>   
      </div>
    </div>
    </>
    
  )
}

export default Home
