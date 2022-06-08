
import { Button, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import login from '../../../images/login.png'
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';

const Registration = () => {
    const [loginData, setLoginData] = useState({})

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = [...loginData];
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('your password not matched')
        }
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>

                    <form onSubmit={handleLoginSubmit}>
                        <Typography variant="body1" gutterBottom>login
                        </Typography>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your email"
                            name='email'
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            name='password'
                            onChange={handleOnChange}
                            autoComplete="password"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Re type Password"
                            type="password"
                            name='password2'
                            onChange={handleOnChange}
                            autoComplete="password"
                            variant="standard" />
                        <NavLink to="/register">
                            <Button
                                style={{ textDecoration: 'none' }}

                                variant="contained" sx={{ width: '75%', m: 1 }} type="submit"> Already registered ? plzlogin

                            </Button>
                        </NavLink>                        <Button
                            style={{ textDecoration: 'none' }}

                            variant="contained" sx={{ width: '75%', m: 1 }} type="submit"> Log in

                        </Button>
                    </form>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />

                </Grid>


            </Grid>
        </Container>
    );
};

export default Registration;