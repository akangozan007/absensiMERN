import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { NavbarDash } from "../components/ContentDash";
import AbsenDash from "../components/AbsenDash";
axios.defaults.withCredentials = true; // Ensure cookies are sent

const Dashboard = () => {
  const [userLogin, setUserLogin] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();  // Correct placement for the hook

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
        navigate('/');  // Correct usage of navigate
      });
  }, [navigate]);  // Added navigate as dependency to avoid stale closures

  if (!userLogin && !errorMessage) {
    return <div>Loading...</div>;
  }

  if (errorMessage) {
    return <div>Error: {errorMessage}</div>;
  }

  // Display data after it has been fetched
  return (
    <>

    <NavbarDash session={userLogin} />
      <div className='container-fluid position-relative float-end'>
        <AbsenDash session={userLogin}/>
      </div>
      
    </>
  );
};

export default Dashboard;
