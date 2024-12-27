import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import InputAdornment from '@mui/material/InputAdornment';
// import AccountCircle from '@mui/icons-material/AccountCircle';

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
        <Box 
          component="form" 
          sx={{ 
            p: 2, 
            border: '1px dash mediumseagreen', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
          }} 
        >
         <TextField 
            id="Username"
            label="Username" 
            variant="outlined" 
            sx={{
              // margin
              m:1,
              // Root class for the input field
              "& .MuiOutlinedInput-root": {
                color: "mediumseagreen",
                // Class for the border around the input field
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "mediumseagreen",
                  borderWidth: "1px",
                },
                "&.Mui-focused": {
                  color: "mediumseagreen",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "mediumseagreen",
                    borderWidth: "3px",
                  },
                },
              },
              // Class for the label of the input field
              "& .MuiInputLabel-outlined": {
                color: "mediumseagreen",
                fontWeight: "bold",
              },
              
            }}
          />

          <TextField 
            id="password" 
            label="Password" 
            variant="outlined" 
            sx={{
              m:1,
              // Root class for the input field
              "& .MuiOutlinedInput-root": {
                color: "mediumseagreen",
                // Class for the border around the input field
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "mediumseagreen",
                  borderWidth: "2px",
                },
              },
              // Class for the label of the input field
              "& .MuiInputLabel-outlined": {
                color: "mediumseagreen",
                fontWeight: "bold",
              },
              "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "red",
                borderWidth: "3px",
                },
              },
            }}
          />
        </Box>

        </div>
      </div>
    </div>
  </>
  );
}

export default Home;
