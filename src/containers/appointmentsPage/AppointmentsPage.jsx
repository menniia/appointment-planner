import PropTypes from "prop-types";
import { useState } from "react";
import AppointmentForm from "../../components/appointmentForm/AppointmentForm";
import TileList from "../../components/tileList/TileList";

const AppointmentsPage = ({ appointments, contacts, addAppointment }) => {
    const [newAppointment, setNewAppointment] = useState({ name: "", contact: "", date: "", time: "" })

    const handleSubmit = event => {
        event.preventDefault();
        if (addAppointment) {
            addAppointment(newAppointment)
            setNewAppointment({ name: "", contact: "", date: "", time: "" })
        }
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setNewAppointment((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div>
            <section>
                <h2>Add Appointments</h2>
                <AppointmentForm
                    contacts={contacts}
                    name={newAppointment.name}
                    contact={newAppointment.contact}
                    date={newAppointment.date}
                    time={newAppointment.time}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    setName={(value) => setNewAppointment((prev) => ({ ...prev, name: value }))}
                    setContact={(value) => setNewAppointment((prev) => ({ ...prev, contact: value }))}
                    setDate={(value) => setNewAppointment((prev) => ({ ...prev, date: value }))}
                    setTime={(value) => setNewAppointment((prev) => ({ ...prev, time: value }))}
                />
            </section>
            <hr />
            <section>
                <h2>Appointments</h2>
                <TileList items={appointments} />
            </section>
        </div>
    )
}

AppointmentsPage.propTypes = {
    appointments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            contact: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            time: PropTypes.string.isRequired,
        })
    ).isRequired,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            phoneNumber: PropTypes.string,
            email: PropTypes.string,
        })
    ).isRequired,
    addAppointment: PropTypes.func.isRequired,
};
export default AppointmentsPage;