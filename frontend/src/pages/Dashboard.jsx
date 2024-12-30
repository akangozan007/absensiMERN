import React from 'react';
// import axios from 'axios';
import axios from "axios";

axios.defaults.withCredentials = true; // Pastikan cookie dikirim

const Dashboard = () => {

  axios.get("http://localhost:5000/dashboard")
  .then((response) => {
    console.log("Data session:", response.data);
  })
  .catch((error) => {
    console.error("Gagal mendapatkan session:", error.response.data);
  });

  return (
    <div>
      <h1>Selamat Datang</h1>
      <p>Anda login sebagai</p>
    </div>
  );
};

export default Dashboard;
