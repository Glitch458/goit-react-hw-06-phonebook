import ContactItem from 'components/ContactItem';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
