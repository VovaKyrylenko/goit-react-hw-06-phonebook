import React, { useEffect } from 'react';
import FormComponent from './form/Form';
import * as Yup from 'yup';
import FriendList from './list/List';
import SearchBar from './Finder/Finder';
import { Container } from './form/Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/phoneSlice';
import { LOCAL_ID } from 'refs/localStorage';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phone.contacts);

  const initialValues = {
    name: '',
    phoneNumber: '',
  };

  const FormSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    phoneNumber: Yup.string()
      .required('Phone number is required')
      .matches(/^[0-9]+$/, 'Invalid phone number'),
  });

  const onSubmit = (values, { resetForm }) => {
    if (contacts.some(contact => contact.name === values.name)) {
      alert(`${values.name} is already in your contacts`);
      resetForm();
    } else {
      dispatch(addContact(values));
      resetForm();
    }
  };
  useEffect(() => {
    localStorage.setItem(LOCAL_ID, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Container>
        <h2>Phonebook</h2>
        <FormComponent
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={FormSchema}
        />
        <h2 style={{ marginTop: '3rem', marginBottom: '0px' }}>Contacts</h2>
        <SearchBar />
        <FriendList />
      </Container>
    </>
  );
};

export default App;
