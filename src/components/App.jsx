import { useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import { LOC_ST } from 'redux/contactList/slice';

const App = () => {
  const contacts = useSelector(state => state.contactList);
  const filterValue = useSelector(state => state.filterValue);

  useEffect(() => {
    localStorage.setItem(LOC_ST, JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;
