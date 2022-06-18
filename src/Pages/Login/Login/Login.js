import { Alert, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import login from '../../../images/login.png'
import TextField from '@mui/material/TextField';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user,loginUser,signINWithGoogle, isLoading,authError} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = [...loginData];
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {
       loginUser (loginData.email,loginData.password,location,navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn = () =>{
        signINWithGoogle(location,navigate)

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
                            onBlur={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            name='password'
                            onBlur={handleOnChange}
                            autoComplete="password"
                            variant="standard" />
                        <NavLink to="/registration">
                      
                            <Button style={{textDecoration: 'none'}} variant="contained" sx={{ width: '75%', m: 1 ,textDecoration: 'none'}} type="submit"> New user? plz register

                            </Button>
                        </NavLink>  
                        {isLoading &&  <CircularProgress />}
                    {user?.email && <Alert severity="success">This is a success alert — check it out!</Alert> }
                   {authError &&  <Alert severity="error">{authError.message} big error happen
    
      </Alert> } 
                                           
                        <Button style={{textDecoration: 'none'}} variant="contained" sx={{ width: '75%', m: 1 }} type="submit"> Log in

                        </Button>
                    </form>
                    <p>--------------------------</p>
                    <Button onClick={handleGoogleSignIn} style={{textDecoration: 'none'}} variant="contained" sx={{ width: '35%', m: 1 }} type="submit"> Google Sign In

</Button>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />

                </Grid>


            </Grid>
        </Container>
    );
};

export default Login;