import styled from '@emotion/styled';

export const FriendListContainer = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

export const Span = styled.span`
  margin-bottom: 0.5rem;
  color: #666;
  font-weight: bold;
  width: 100%;
  margin-bottom: 1rem;
`;

export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 8px;
  background-color: #f5f5f5;
  border-radius: 4px;
`;

export const Name = styled.span`
  font-weight: bold;
`;

export const PhoneNumber = styled.span`
  color: #666;
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #666;
  font-size: 20px;
  transition: color 0.2s;

  &:hover {
    color: #f44336;
  }
`;
