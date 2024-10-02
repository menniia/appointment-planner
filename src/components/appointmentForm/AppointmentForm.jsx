import PropTypes from "prop-types";
import ContactPicker from "../contactPicker/ContactPicker";


const getTodayString = () => {
    const [month, day, year] = new Date()
        .toLocaleDateString("en-US")
        .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

const AppointmentForm = ({ contacts, name, setName, setContact, date, setDate, time, setTime, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    name="date"
                    id="date"
                    min={getTodayString()}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="time">Time</label>
                <input
                    type="time"
                    name="time"
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
            </div>
            <ContactPicker contacts={contacts} setContact={setContact} />
            <button type="submit">Submit</button>
        </form>
    )
}

AppointmentForm.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            phoneNumber: PropTypes.string,
            email: PropTypes.string
        })
    ),
    name: PropTypes.string,
    setName: PropTypes.func.isRequired,
    contact: PropTypes.string.isRequired,
    setContact: PropTypes.func.isRequired,
    date: PropTypes.string.isRequired,
    setDate: PropTypes.func.isRequired,
    time: PropTypes.string.isRequired,
    setTime: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default AppointmentForm;