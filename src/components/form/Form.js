import React from 'react';
import { Formik } from 'formik';

import {
  Error,
  FormField,
  Label,
  Input,
  Button,
  FormStyle,
} from './Form.styled';

const FormComponent = ({ onSubmit, initialValues, validationSchema }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <FormStyle>
        <FormField>
          <Label htmlFor="name">Name:</Label>
          <Input id="name" name="name" placeholder="Enter your name" />
          <Error name="name" component="div" />
        </FormField>
        <FormField>
          <Label htmlFor="phoneNumber">Phone number:</Label>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
          />
          <Error name="phoneNumber" component="div" />
        </FormField>
        <Button type="submit">Submit</Button>
      </FormStyle>
    </Formik>
  );
};

export default FormComponent;
