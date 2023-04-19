import { useSelector } from 'react-redux';
import { selectFiltredContacts } from 'redux/selectors';

import { ContactListItem } from './ContactListItem'

import { ContactsList } from './ContactList.styled'


export const ContactList = () => {
  const contacts = useSelector(selectFiltredContacts);

  return (
    <ContactsList>
      {contacts.length > 0 &&
        contacts.map(contact  => {
          return (
            <ContactListItem
              key={contact.id}
              name={contact.name}
              number={contact.phone}
              id={contact.id}
            />
          );
        })}
    </ContactsList>
  );
};
