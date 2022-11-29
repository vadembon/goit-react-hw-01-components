import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { Friends } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <Friends key={friend.id}>
          <FriendListItem friend={friend} />
        </Friends>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
