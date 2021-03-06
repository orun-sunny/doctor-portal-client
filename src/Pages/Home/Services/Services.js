import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import SingleService from '../SingleService/SingleService';
import fluoride from "../../../images/fluoride.png"
import cavity from "../../../images/cavity.png"
import whitening from "../../../images/whitening.png"

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: whitening
    }
]



const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                
            <Typography variant="h6" component="div">
                      OUR Services

                    </Typography>

                    <Typography sx={{color:'success.main', m:5}} variant="h4" component="div">
                     Here we ARe

                    </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map( Service => <SingleService
                        key = {Service.name}
                        Service = {Service}
                        ></SingleService>)
                    }
                </Grid>
            </Container>

        </Box>
    );
};

export default Services;