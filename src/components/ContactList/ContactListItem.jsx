import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import {
  ContactListItems,
  ContactListItemsData,
  ContactListItemsBtn,
} from './ContactList.styled';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContactListItems>
      <ContactListItemsData>{name}:</ContactListItemsData>
      <ContactListItemsData>{number}</ContactListItemsData>
      <ContactListItemsBtn type="button" onClick={handleDelete}>
        Delete
      </ContactListItemsBtn>
    </ContactListItems>
  );
};

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};
