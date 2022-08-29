import ContactItem from 'components/ContactItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <>
      <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
