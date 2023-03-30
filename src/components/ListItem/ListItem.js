import { FiTrash2 } from 'react-icons/fi';
import PropTypes from 'prop-types';
import {
  FriendListItem,
  Name,
  PhoneNumber,
  DeleteButton,
} from 'components/list/List.styled';
import React from 'react';
function FriendItem({ friend, deleteContactById }) {
  return (
    <FriendListItem>
      <Name>{friend.name}</Name>
      <PhoneNumber>{friend.phoneNumber}</PhoneNumber>
      <DeleteButton onClick={deleteContactById} id={friend.id}>
        <FiTrash2 />
      </DeleteButton>
    </FriendListItem>
  );
}

FriendItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
  }).isRequired,
  deleteContactById: PropTypes.func.isRequired,
};

export default FriendItem;
