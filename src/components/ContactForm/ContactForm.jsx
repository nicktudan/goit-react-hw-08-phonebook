import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

import { Form, Field, FormBtn, ErrorMessage } from './ContactForm.styled';


const ContactSchema = yup.object().shape({
  name: yup.string().trim().matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
    'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore dArtagnan').required('Required'),
  phone: yup.string().trim().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +').required('Required'),
})

const initialValues = {
  name: '',
  phone: '',
}

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (newContact, { resetForm }) => {
        
    const isExist = contacts.some(
      contact =>
        (contact.name.toLowerCase() === newContact.name.toLowerCase() &&
          contact.phone === newContact.phone) ||
        contact.phone === newContact.phone
    );
    if (isExist) {
      alert(
        `${newContact.name} or ${newContact.phone} is already in contacts.`
      );
    } else {
        dispatch(addContact(newContact));
        resetForm({
          name: '',
          phone: '',
        });
    }
  };


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={(newContact, actions) => {
        handleSubmit(newContact, actions);
      }}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name" placeholder="enter a name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label>
          Number
          <Field type="tel" name="phone" placeholder="enter the phone number" />
          <ErrorMessage name="phone" component="div" />
        </label>
        <FormBtn type="submit">Add contact</FormBtn>
      </Form>
    </Formik>
  );
}