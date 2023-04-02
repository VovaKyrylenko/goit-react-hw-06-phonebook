import React from 'react';
import { FriendListContainer, Span } from './List.styled';
import FriendItem from 'components/ListItem/ListItem';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/phoneSlice';

function FriendList() {
  const dispatch = useDispatch();
  const friends = useSelector(state => state.phone.contacts);
  const filter = useSelector(state => state.phone.filter);

  return (
    <>
      <Span>Your contacts:</Span>
      {friends.length === 0 ? (
        <p>Nothing here</p>
      ) : (
        <FriendListContainer>
          {friends
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase().trim())
            )
            .map(friend => (
              <FriendItem
                friend={friend}
                deleteContactById={event => {
                  dispatch(removeContact(event.currentTarget.id));
                }}
                key={friend.id}
              />
            ))}
        </FriendListContainer>
      )}
    </>
  );
}
export default FriendList;
