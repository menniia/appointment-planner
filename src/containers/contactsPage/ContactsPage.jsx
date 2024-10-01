import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react"
import ContactForm from "../../components/contactForm/contactForm";
import TileList from "../../components/tileList/TileList";


const ContactsPage = ({ contacts, addContact }) => {
    const [newContact, setNewContact] = useState({ name: "", phone: "", email: "" });
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


    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        if (newContact.name && newContact.phone && newContact.email) {
            addContact(newContact.name, newContact.phone, newContact.email)
            setNewContact({ name: "", phone: "", email: "" })
        }
    }, [newContact, addContact])


    return (
        <div>
            <section>
                <h2>Add Contact</h2>
                <ContactForm
                    name={newContact.name}
                    phone={newContact.phone}
                    email={newContact.email}
                    handleSubmit={handleSubmit}
                    handleInputChange={handleInputChange}
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