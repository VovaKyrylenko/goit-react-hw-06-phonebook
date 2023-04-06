import { FiTrash2 } from 'react-icons/fi';
import {
  FriendListItem,
  Name,
  PhoneNumber,
  DeleteButton,
} from 'components/list/List.styled';
import React from 'react';
import { useDeleteContactMutation } from 'redux/mockAPI';
function FriendItem({ friend }) {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <FriendListItem>
      <Name>{friend.name}</Name>
      <PhoneNumber>{friend.phoneNumber}</PhoneNumber>
      <DeleteButton
        onClick={async event => {
          await deleteContact(event.currentTarget.id);
        }}
        id={friend.id}
      >
        <FiTrash2 />
      </DeleteButton>
    </FriendListItem>
  );
}
export default FriendItem;
