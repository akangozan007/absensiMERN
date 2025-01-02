import React, { useState, useEffect } from 'react';
import axios from "axios";
import {NavbarDash}  from "../components/ContentDash";

axios.defaults.withCredentials = true; // Pastikan cookie dikirim

const Dashboard = () => {
  const [userLogin, setUserLogin] = useState(null); // State untuk menyimpan data pengguna
  const [errorMessage, setErrorMessage] = useState(""); // State untuk menyimpan error

  useEffect(() => {
    // Fetch data ketika komponen dimuat
    axios
      .get("http://localhost:5000/dashboard")
      .then((response) => {
        console.log("Data session:", response.data);
        setUserLogin(response.data); // Simpan data ke state
      })
      .catch((error) => {
        console.error("Gagal mendapatkan session:", error.response?.data || error.message);
        setErrorMessage("Gagal mendapatkan session, silakan login kembali."); // Set pesan error
      });
  }, []);

  if (!userLogin && !errorMessage) {
    return <div>Loading...</div>;
  }


  if (errorMessage) {
    return <div>Error: {errorMessage}</div>;
  }

  // Tampilkan data setelah berhasil diambil
  return (
   <>
    <NavbarDash/>
   </>
  );
};

export default Dashboard;
