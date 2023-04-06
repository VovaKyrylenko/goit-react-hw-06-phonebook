import styled from '@emotion/styled';

export const Input = styled.input`
  margin-top: 1rem;
  margin-bottom: 1.5rem;
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
