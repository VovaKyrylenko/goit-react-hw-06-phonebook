import { Field, ErrorMessage, Form } from 'formik';
import styled from '@emotion/styled';

export const FormStyle = styled(Form)`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 30%;
  margin: 0 auto;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  color: #666;
  font-weight: bold;
`;

export const Input = styled(Field)`
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 10px;
  border: none;
  background-color: #f2f2f2;
  color: #666;
  font-size: 1.2rem;
  width: 100%;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  }
`;

export const Error = styled(ErrorMessage)`
  color: red;
  font-size: 1rem;
  margin-top: 0.5rem;
`;

export const Button = styled.button`
  padding: 1rem;
  border-radius: 10px;
  border: none;
  background-color: #0077cc;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  margin-top: 2rem;
  &:hover {
    background-color: #005ca9;
  }
`;
