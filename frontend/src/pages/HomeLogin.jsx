import React from "react";
import LoginForm from '../components/LoginForm';



function Home() {
  return (
    <>
    <div className="container-fluid position-absolute top-50 start-50 translate-middle p-5">
      <div className="row">
        {/* Kolom Deskripsi */}
        <div className="col-lg-8 col-12 d-md-block d-none">
          <h1 className="display-1 text-white fw-bolder">
            Aplikasi Absensi
          </h1>
          <h2 className="display-5 text-break fw-bolder text-white">
            Gratis .. <br/>tak berlisensi untuk kebutuhan sekolah
          </h2>
        </div>

        {/* Kolom Form */}
        <div className="col-lg-4 col-12 rounded px-auto rounded-5 position-relative">
        <LoginForm />
        </div>
      </div>
    </div>
  </>
  );
}

export default Home;
