import React from 'react';
import { FriendListContainer, Span } from './List.styled';
import FriendItem from 'components/listItem/ListItem';

function FriendList({ contacts, filter }) {
  const filteredContacts = filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim())
      )
    : contacts;

  const friendItems = filteredContacts.map(friend => (
    <FriendItem friend={friend} key={friend.id} />
  ));
  return (
    <>
      <Span>Your contacts:</Span>
      {contacts.length === 0 ? (
        <p>Nothing here</p>
      ) : (
        <FriendListContainer>{friendItems}</FriendListContainer>
      )}
    </>
  );
}
export default FriendList;
