const UserItem = ({ user }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="header">{user.name}</div>
        <div className="meta">{user.age}</div>
        <div className="description">{user.profession}</div>
      </div>
    </div>
  );
};

export default UserItem;
