import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import AppointmentHead from '../AppointmentHead/AppointmentHead';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [date,setDate] = React.useState(new Date())
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHead date={date} setDate={setDate}></AppointmentHead>
            <AvailableAppointments date={date} ></AvailableAppointments>
        </div>
    );
};

export default Appointment;