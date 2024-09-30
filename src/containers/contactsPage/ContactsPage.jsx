import PropTypes from "prop-types";
import { useEffect, useState } from "react"
import ContactForm from "../../components/contactForm/contactForm";
import TileList from "../../components/tileList/TileList";


const ContactsPage = ({ contacts, addContact }) => {
    const [newContact, setNewContact] = useState({ name: "", phoneNumber: "", email: "" });
    const [isDuplicate, setIsDuplicate] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setNewContact((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    useEffect(() => {
        const isNameDuplicate = contacts.some(contact => contact.name === newContact.name)
        setIsDuplicate(isNameDuplicate);
    }, [newContact.name, contacts])


    const handleSubmit = event => {
        event.preventDefault()
        if (newContact.name && newContact.phone && newContact.email) {
            addContact(newContact.name, newContact.phoneNumber, newContact.email)
            setNewContact({ name: "", phoneNumber: "", email: "" })
        }
    }
    return (
        <div>
            <section>
                <h2>Add Contact</h2>
                <ContactForm
                    name={newContact.name}
                    phone={newContact.phoneNumber}
                    email={newContact.email}
                    handleSubmit={handleSubmit}
                    handleInputChange={handleInputChange}
                    isDuplicate={isDuplicate}
                />
                {isDuplicate && <p style={{ color: "red" }}>This name is already in use</p>}
            </section>
            <hr />
            <section>
                <h2>Contacts</h2>
                <TileList contacts={contacts} />
            </section>
        </div>
    )
}

ContactsPage.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            phoneNumber: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired
        })
    ).isRequired,
    addContact: PropTypes.func.isRequired
}

export default ContactsPage;