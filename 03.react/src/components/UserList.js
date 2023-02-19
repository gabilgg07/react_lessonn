import UserItem from "./UserItem";
import { users } from "../seed/dumb";

const UserList = () => {
  return (
    <div className="container mt-5">
      <div className="ui cards">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
