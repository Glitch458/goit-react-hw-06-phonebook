import { useState, useEffect } from 'react';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';

const LOC_ST = 'contactList';
const contactList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem(LOC_ST)) || contactList
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LOC_ST, JSON.stringify(contacts));
  }, [contacts]);

  const submitHandler = newContact => {
    const checkNewName = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (checkNewName) {
      alert(newContact.name + ' is already in contacts');
      return;
    }

    setContacts(prevState => [...prevState, newContact]);
  };

  const hanldeFilterInputChange = evt => {
    setFilter(evt.target.value);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <Form submitHandler={submitHandler} />

      <h2>Contacts</h2>
      <Filter value={filter} inputChange={hanldeFilterInputChange} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
