import { useDispatch } from 'react-redux';
import { remove } from 'redux/contactList/slice';
import PropTypes from 'prop-types';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {name}: {number}
      <button type="button" onClick={() => dispatch(remove(id))}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
