import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate(); // hook untuk navigasi

  const handleLogout = () => {
    // Panggil endpoint backend untuk logout
 
    fetch('http://localhost:5000/dashboard/logout', {
      method: 'GET',
      credentials: 'include',
    })
    .then(response => {
      if (response.ok) {
            navigate('/');
      } else {
        console.error('Logout gagal');
      }
    });
  };

  return (
    <div>
      {/* Mungkin bisa menampilkan loading atau pesan logout sementara */}
      <p>Logging out...</p>
    </div>
  );
}

export default Logout;
