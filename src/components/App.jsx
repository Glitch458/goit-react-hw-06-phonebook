import { useSelector, useDispatch } from 'react-redux/es/exports';
import { add } from 'redux/contactList/slice';
import { useEffect, useState } from 'react';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import { LOC_ST } from 'redux/contactList/slice';

const App = () => {
  const contacts = useSelector(state => state.contactList);
  const dispatch = useDispatch();
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

    dispatch(add(newContact));
  };

  const hanldeFilterInputChange = evt => {
    setFilter(evt.target.value);
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
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;
