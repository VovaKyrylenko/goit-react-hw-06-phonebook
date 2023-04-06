import React, { useState } from 'react';
import FormComponent from './form/Form';
import * as Yup from 'yup';
import FriendList from './list/List';
import SearchBar from './finder/SearchBar';
import { Container } from './form/Form.styled';
import { useAddContactMutation, useGetContactsQuery } from 'redux/mockAPI';

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

const App = () => {
  const [filter, setFilter] = useState('');
  const { data: contacts, isFetching, isError } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleFormSubmit = (values, { resetForm }) => {
    if (contacts.some(contact => contact.name === values.name)) {
      alert(`${values.name} is already in your contacts`);
    } else {
      addContact(values);
      resetForm();
    }
  };

  return (
    <Container>
      <h2>Phonebook</h2>
      <FormComponent
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={FormSchema}
      />
      <h2 style={{ marginTop: '3rem', marginBottom: '0px' }}>Contacts</h2>
      <SearchBar setFilter={setFilter} filter={filter} />
      {isError && <p>Error...</p>}
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <FriendList contacts={contacts} filter={filter} />
      )}
    </Container>
  );
};

export default App;
