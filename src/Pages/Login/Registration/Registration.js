
import { Alert, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import login from '../../../images/login.png'
import TextField from '@mui/material/TextField';
import { Navigate, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Registration = () => {
    const [loginData, setLoginData] = useState({});
    const {user,registerUser,isLoading,authError} =useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}; // ade
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('your password not matched')
            return
        }
        registerUser(loginData.email,loginData.password,loginData.name,Navigate);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>

                    { !isLoading && <form onSubmit={handleLoginSubmit}>
                        <Typography variant="body1 contained" sx={{ width: '75%', m: 5 }}   gutterBottom>Registration Page
                        </Typography>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your name"
                            name='your name'
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your email"
                            name='email'
                            onBlur={handleOnBlur}
                            variant="standard" />
                     
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            name='password'
                            onBlur={handleOnBlur}
                            autoComplete="password"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Re type Password"
                            type="password"
                            name='password2'
                            onBlur={handleOnBlur}
                            autoComplete="password"
                            variant="standard" />
                        <NavLink to="/login">
                            <Button
                                style={{ textDecoration: 'none' }}

                                variant="contained" sx={{ width: '75%', m: 1 }} type="submit"> Already registered ? plzlogin

                            </Button>
                        </NavLink>                        <Button
                            style={{ textDecoration: 'none' }}

                            variant="contained" sx={{ width: '75%', m: 1 }} type="submit"> Register

                        </Button>
                    </form>}
                    {isLoading &&  <CircularProgress />}
                    {user?.email && <Alert severity="success">This is a success alert — check it out!</Alert> }
                   {authError &&  <Alert severity="error">{authError}
    
      </Alert> }

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />

                </Grid>


            </Grid>
        </Container>
    );
};

export default Registration;