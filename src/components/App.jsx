import React, { useState, useEffect } from 'react';
import FormComponent from './form/Form';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import FriendList from './list/List';
import SearchBar from './Finder/Finder';
import { Container } from './form/Form.styled';

const App = () => {
  const LOCAL_ID = 'contacts';

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
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
      values.id = nanoid();
      setContacts([...contacts, values]);
      resetForm();
    }
  };

  const deleteContactById = event => {
    setContacts(
      contacts.filter(contact => contact.id !== event.currentTarget.id)
    );
  };

  const handleInputChange = event => {
    setFilter(event.target.value);
  };

  const handleFilter = () => {
    if (filter.trim() === '') {
      return contacts;
    }
    const normFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter)
    );
  };

  useEffect(() => {
    localStorage.getItem(LOCAL_ID) &&
      setContacts(JSON.parse(localStorage.getItem(LOCAL_ID)));
    console.log(
      'localStorage.getItem(LOCAL_ID):',
      JSON.parse(localStorage.getItem(LOCAL_ID))
    );
  }, []);

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
        <SearchBar value={filter} onChange={handleInputChange} />
        <FriendList
          friends={handleFilter()}
          deleteContactById={deleteContactById}
          storageId={LOCAL_ID}
        />
      </Container>
    </>
  );
};

export default App;
