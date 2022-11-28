export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <span>{isOnline}</span>
      <img src={avatar} alt="avatar" width={120} />
      <p>{name}</p>
    </>
  );
};
