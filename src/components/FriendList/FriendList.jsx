import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import styles from './friend-list.module.css';

export default function FriendList({ friendsItems }) {
  const friendsData = friendsItems.map(friend => (
    <FriendListItem
      key={friend.id}
      avatar={friend.avatar}
      name={friend.name}
      isOnline={friend.isOnline}
    />
  ));

  return (
    <>
      <ul className={styles.friend}> {friendsData}</ul>
    </>
  );
}

FriendList.propTypes = {
  friendsItems: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
