import PropTypes from 'prop-types';
import { Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <Avatar src={avatar} alt="avatar" width={60} height={60} />
      <Name>{name}</Name>
    </>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
