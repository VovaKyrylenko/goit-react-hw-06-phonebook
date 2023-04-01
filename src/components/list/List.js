import React, { useEffect } from 'react';
import { FriendListContainer, Span } from './List.styled';
import FriendItem from 'components/ListItem/ListItem';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/phoneSlice';
import { LOCAL_ID } from 'refs/localStorage';

function FriendList(props) {
  const dispatch = useDispatch();
  const friends = useSelector(state => state.phone.contacts);
  const filter = useSelector(state => state.phone.filter);

  useEffect(() => {
    const storedFriends = JSON.parse(localStorage.getItem(LOCAL_ID)) || [];
    if (JSON.stringify(storedFriends) !== JSON.stringify(friends)) {
      localStorage.setItem(LOCAL_ID, JSON.stringify(friends));
    }
  }, [friends]);

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
