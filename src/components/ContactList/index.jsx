import ContactItem from 'components/ContactItem';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux/es/exports';

const ContactList = () => {
  const filterValue = useSelector(state => state.filterValue);
  const contacts = useSelector(state => state.contactList);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      <ul className={styles.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
