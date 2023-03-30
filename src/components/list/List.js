import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FriendListContainer, Span } from './List.styled';
import FriendItem from 'components/ListItem/ListItem';

function FriendList(props) {
  const { friends, deleteContactById, storageId } = props;

  useEffect(() => {
    const storedFriends = JSON.parse(localStorage.getItem(storageId)) || [];
    if (JSON.stringify(storedFriends) !== JSON.stringify(friends)) {
      localStorage.setItem(storageId, JSON.stringify(friends));
    }
  }, [friends, storageId]);

  return (
    <>
      <Span>Your contacts:</Span>
      {friends.length === 0 ? (
        <p>Nothing here</p>
      ) : (
        <FriendListContainer>
          {friends.map(friend => (
            <FriendItem
              friend={friend}
              deleteContactById={deleteContactById}
              key={friend.id}
            />
          ))}
        </FriendListContainer>
      )}
    </>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContactById: PropTypes.func.isRequired,
  storageId: PropTypes.string.isRequired,
};

export default FriendList;
