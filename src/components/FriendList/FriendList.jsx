import FriendListItem from './FriendListItem/FriendListItem';

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
      <ul class="friend-list"></ul>
      {friendsData}
    </>
  );
}
