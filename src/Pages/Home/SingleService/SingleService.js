import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const SingleService = (props) => {
    const { name, description, img } = props.Service;
    return (
        <Grid item xs={2} sm={2} md={4}>

            <Card sx={{ minWidth: 50 ,boxShadow:0}}>
                <CardMedia
                    component="img"
                    height="100"
                    style= {{width:'auto', height:"80px" ,margin:'0 auto'}}
                    image={img}
                    alt="green iguana"
                />



                <CardContent>
                
                    <Typography variant="h5" component="div">
                        {name}

                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="body2 " color="text.secondary" >
                     
                  
                    </Typography>
                </CardContent>
                <CardActions>
                
                </CardActions>
            </Card>


        </Grid>
    );
};

export default SingleService;