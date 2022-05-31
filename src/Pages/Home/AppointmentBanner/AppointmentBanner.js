import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment.png'
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,0.9)',
    // backgroundBlendMode: 'darken, luminosity',
    marginTop: 180
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img 
                    style={{width:'400px', marginTop:'-120px'}}
                    
                    src= {doctor} alt="" />

                </Grid>
                <Grid item xs={12} md={6} sx={{display:'flex',justifyContent:'flex-start',textAlign:"left",alignItems:"center"}}>
                    <Box >
                    <Typography variant='h6' sx={{mb:5}} style={{color:'#5CE7ED'}}>
                        Appointment


                    </Typography>
                    <Typography variant='h4' sx={{my:5}} style={{color:'white'}}>
                        Make an Appointment today


                    </Typography>

                    <Typography variant='h7' sx={{my:5}} style={{color:'white',fontSize:'4', fontWeight:'300'}}>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, hic dolorum iure ex nulla nostrum veniam porro sint maiores vero vitae. Deserunt reiciendis praesentium vitae expedita, ad soluta quibusdam tempore.


                    </Typography>
                    <br />

                    <Button sx={{my:5}} variant='contained'>Learn more</Button>

                    </Box>
                </Grid>

            </Grid>
        </Box>

    );
};

export default AppointmentBanner;