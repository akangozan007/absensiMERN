import React, { useState, useEffect } from 'react';
import axios from "axios";
import { NavbarDash }  from "../components/ContentDash";

axios.defaults.withCredentials = true; // Pastikan cookie dikirim

const Dashboard = () => {
  const [userLogin, setUserLogin] = useState('');
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {

    axios
      .get("http://localhost:5000/dashboard")
      .then((response) => {
        console.log("Data session:", response.data);
        setUserLogin(response.data);
      })
      .catch((error) => {
        console.error("Gagal mendapatkan session:", error.response?.data || error.message);
        setErrorMessage("Gagal mendapatkan session, silakan login kembali.");
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
    <NavbarDash session={userLogin} />
   </>
  );
};

export default Dashboard;
