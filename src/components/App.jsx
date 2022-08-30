import { useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import { LOC_ST } from 'redux/contactList/slice';

const App = () => {
  const contacts = useSelector(state => state.contactList);

  useEffect(() => {
    localStorage.setItem(LOC_ST, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
