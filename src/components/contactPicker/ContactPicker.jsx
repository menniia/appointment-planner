import PropTypes from "prop-types";

const ContactPicker = ({ contacts, setContact, value }) => {
    return (
        <select onChange={(e) => setContact(e.target.value)} value={value}>
            <option value="">No contact selected</option>
            {contacts.map((contact) => (
                <option key={contact.id} value={contact.id}>
                    {contact.name}
                </option>
            ))}

        </select>
    )
}

ContactPicker.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    setContact: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default ContactPicker;