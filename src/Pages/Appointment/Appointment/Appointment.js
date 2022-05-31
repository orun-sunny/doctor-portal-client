import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import AppointmentHead from '../AppointmentHead/AppointmentHead';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHead></AppointmentHead>
            <AvailableAppointments></AvailableAppointments>
        </div>
    );
};

export default Appointment;