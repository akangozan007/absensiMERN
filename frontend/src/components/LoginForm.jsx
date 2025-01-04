import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (!username || !password) {
      setError('Harap masukkan username dan password');
      return;
    }

    try {
      // proses mengirimkan data login form ke backend
      const response = await axios.post('http://localhost:5000/login', { username, password });
      console.log(response.data);
      alert("Login Berhasil");

      // reddirect ke page dashboard
      navigate('/dashboard'); 
    } catch (error) {
      console.error('Login error:', error);
      setError('Login gagal. cek kembali username dan password anda.');
    }
  };

  return (
    <div className='container d-sm-block'>
      <Box 
        component="form" 
        sx={{ 
          p: '2', 
          border: '1px dash mediumseagreen', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          backgroundColor: '#100e1c',
          borderWidth: "1px",
          height: '400px',
        }} 
        onSubmit={handleSubmit} //handle submit
      >
        <Stack direction="row" alignItems="center" gap={1}>
          <AccountCircleIcon sx={{
            color: "mediumseagreen",
            fontSize: "150px",
          }} />
        </Stack>

        <TextField 
          id="username" 
          label="Username" 
          variant="outlined" 
          sx={{
            m: 1,
            "& .MuiOutlinedInput-root": {
              color: "mediumseagreen",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "mediumseagreen",
                borderWidth: "1px",
              },
            },
            "& .MuiInputLabel-outlined": {
              color: "mediumseagreen",
            },
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "mediumseagreen",
                borderWidth: "3px",
              },
            },
          }}
          value={username} // tangkap data username
          onChange={(e) => setUsername(e.target.value)} // username
        />

        <TextField 
          id="password" 
          label="Password" 
          variant="outlined" 
          type="password"
          sx={{
            m: 1,
            "& .MuiOutlinedInput-root": {
              color: "mediumseagreen",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "mediumseagreen",
                borderWidth: "1px",
              },
            },
            "& .MuiInputLabel-outlined": {
              color: "mediumseagreen",
            },
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "mediumseagreen",
                borderWidth: "3px",
              },
            },
          }}
          value={password} //password
          onChange={(e) => setPassword(e.target.value)} // menetapkan value password
        />

        {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>} {/* Display error message if exists */}

        <Button 
          variant="outlined" 
          color="success" 
          type="submit" // Submit file
        >
          Login
        </Button>
      </Box>
    </div>
  );
}

export default LoginForm;
