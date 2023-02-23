import React from "react";

const User = ({ user }) => {
  if (!(Object.keys(user).length > 0)) {
    return (
      <div className="mt-5">
        <h2 className="text-danger"> 404 - User not found</h2>
      </div>
    );
  }

  return (
    <div className="mt-5">
      <h4>Name: {user.name}</h4>
      <h4>Email: {user.email}</h4>
    </div>
  );
};

export default User;
