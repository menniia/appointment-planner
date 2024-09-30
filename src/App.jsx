import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root"
import ContactsPage from "./containers/contactsPage/ContactsPage"
import AppointmentsPage from "./containers/appointmentsPage/AppointmentsPage"
import { useCallback, useState } from "react"


function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const addContact = useCallback((name, phoneNumber, email) => {
    const newContact = { id: Date.now(), name, phoneNumber, email };
    setContacts((prevContacts) => [...prevContacts, newContact])
  }, [])

  const addAppointment = useCallback((name, contact, date, time) => {
    const newAppointment = { id: Date.now(), name, contact, date, time }
    setAppointments((prevAppointments) => [...prevAppointments, newAppointment])
  }, [])

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
      <Route path={ROUTES.CONTACTS} element={<ContactsPage contacts={contacts} addContact={addContact} />} />
      <Route path={ROUTES.APPOINTMENTS} element={
        <AppointmentsPage
          appointments={appointments}
          contacts={contacts}
          addAppointment={addAppointment}
        />
      } />
    </Route>
  ))



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
