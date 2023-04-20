import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

import { ContactForm } from '..//../components/ContactForm/ContactForm';
import { ContactList } from '..//../components/ContactList/ContactList';
import { Filter } from '..//../components/Filter/Filter';
import { Loader } from '..//../components/Loader/Loader';

import { TitlePhonebook, TitleContacts } from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      {isLoading && <Loader />}
      <ContactList />
    </>
  );
};


export default Contacts;