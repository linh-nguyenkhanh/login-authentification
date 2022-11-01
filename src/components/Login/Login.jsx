import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import FormControllLabel from "@mui/material/FormControlLabel";
import Paper from '@mui/material/Paper'
import { CssBaseline } from '@mui/material';
import { Typography } from "@mui/material";
import Logo from '../Logo.jsx'
import Box from '@mui/material/Box'
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles'
// async function - post method
async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
//passing prop setToken
export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassWord] = useState();
  //make async function
  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  //copy-right section
  function Copyright(props){
    return(
      <Typography variant="body2" color="text.secondary"
      align="center" {...props}>
        {'Copyright © '}
<Link color="inherit" href="https://simple-icecream.netlify.com">
  izzi.netlify.com
</Link> {''}
{new Date().getFullYear()}
{'.'}
      </Typography>
    )
  }

const theme = createTheme();



  return (  
    <ThemeProvider theme={theme}>
    {/* // Left grid container */}
      < Grid container component="main" sx={{ height: "100vh"}}>
        <CssBaseline/>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://finnishcourse.fi/wp-content/uploads/2021/11/FinnishCourse-students-in-Kauniainen-Finnish-Bible-Institute.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
{/* Right container */}
    <Grid item xs={12} sm={8} md={5} component={Paper} square >
      <Box sx={{
        my: 8,
        mx: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
      }}      
      >
      <h1>Log In </h1>
      {/* logo company */}
     
      <Logo/>
      {/* text field = input */}
        <Box component="form" onSubmit={handleSubmit} sx={{mt:1}}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          type="password"
          autoComplete="password"
          autoFocus
        />
       
        {/* Form */}
          <FormControllLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />      
        {/* Button area */}
          <Button
          onChange={handleSubmit}
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            fullWidth
          >
           SIGN IN
          </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Dont have an account? Sign up"}
            </Link>
          </Grid>    
        </Grid>
        <Copyright sx={{mt: 5}}/>     
      </Box>
      </Box>
      </Grid>
    </Grid>
    </ThemeProvider>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
