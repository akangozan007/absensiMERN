// import react from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';

function LoginForm(){


  return(
    <div className='container d-sm-block'>
         <Box 
    component="form" 
    sx={{ 
      p:'2', 
      border: '1px dash mediumseagreen', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      backgroundColor: '#100e1c',
      borderWidth: "1px",
      height:'400px',
    }} 
  >
   
   <Stack direction="row" alignItems="center" gap={1}>
   <AccountCircleIcon sx={
      {
        color:"mediumseagreen",
        fontSize:"150px",
      }
    } />
   </Stack>
   <TextField 
      id="username" 
      label="Username" 
      variant="outlined" 
      sx={{
        m:1,
        // Root class for the input field
        "& .MuiOutlinedInput-root": {
          color: "mediumseagreen",
          // Class for the border around the input field
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "mediumseagreen",
            borderWidth: "1px",
          },
        },
        // Class for the label of the input field
        "& .MuiInputLabel-outlined": {
          color: "mediumseagreen",
          borderColor: "mediumseagreen",
        },
        "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "mediumseagreen",
          borderWidth: "3px",
          },
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
            borderWidth: "1px",
          },
        },
        // Class for the label of the input field
        "& .MuiInputLabel-outlined": {
          color: "mediumseagreen",
          borderColor: "mediumseagreen",
        },
        "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "mediumseagreen",
          borderWidth: "3px",
          },
        },
      }}
    />
    {/* tombol */}
 
        <Button 
        variant="outlined" 
        color="success"  
        >
          Login
        </Button>
    </Box> 
    </div>
  )   
}

export default LoginForm;