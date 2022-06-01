import { Button, Fade, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Booking from '../Booking/Booking';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
    const { name, time } = booking;
    const handleBookSubmit = e => {
        alert("submitting");
        handleBookingClose();
        e.preventDefault();
    }



    return (

        <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            // BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="spring-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <Typography id="spring-modal-description" sx={{ mt: 2 }}>
                        {time}
                    </Typography>
                    <form onSubmit={handleBookSubmit} action="">

                        <TextField
                            disabled
                            sx={{ width: '100%' }}
                            //   label="Size"
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField

                            sx={{ width: '100%' }}
                            //   label="Size"
                            id="outlined-size-small"
                            defaultValue='your nam'
                            size="small"
                        />

                        <TextField
                        disabled

                            sx={{ width: '100%' }}
                            //   label="Size"
                            id="outlined-size-small"
                            defaultValue={date}
                            size="small"
                        />
                        <TextField

                            sx={{ width: '100%' }}
                            //   label="Size"
                            id="outlined-size-small"
                            defaultValue='your email'
                            size="small"
                        />

                        <TextField

                            sx={{ width: '100%' }}
                            //   label="Size"
                            id="outlined-size-small"
                            defaultValue="phone number"
                            size="small"
                        />
                        <Button type= 'submit'  variant="contained">Submit</Button>

                    </form>

                </Box>
            </Fade>
        </Modal>

    );
};

export default BookingModal;