import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from "../../../images/bg.png"
import { Typography, Button } from '@mui/material';
import { Container } from '@mui/system';

const BannerBg = {
    background: `url(${bg})`,

}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    // border: '1px solid red',
    height: 550

}

const Banner = () => {
    return (
        <Container style={BannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{...verticalCenter, textAlign: "left" }} xs={12} md={5}>
                    <Box>
                        <Typography variant='h3'>
                            your new smile
                            <br />
                            starts here

                        </Typography>

                        <Typography sx={{ my: 3, fontSize: 12, fontWeight: 300, color: 'black' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae assumenda cupiditate exercitationem sequi vitae incidunt doloremque excepturi rem corporis nam.
                        </Typography>
                        <Button variant='contained' style={{ mb: "5.5" }} >
                            Get Appointment
                        </Button>
                    </Box>

                </Grid>
                <Grid item xs={12} md={7} style={verticalCenter}>
                    <img style={{ width: "550px" }} src={chair} alt="" />

                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;