import React from "react";

const Login = ({ name }) => {
  if (!name) {
    return (
      <div className="header d-flex justify-content-center">Welcome Guest!</div>
    );
  }

  return (
    <div className="header d-flex justify-content-center">
      Welcome <button className="user-name">{name}</button> !
    </div>
  );
};

export default Login;
