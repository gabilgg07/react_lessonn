import React, { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import User from "./components/User";

function App() {
  const [profile, setProfile] = useState({});

  const handleGetUser = (user) => {
    // console.log(user, "log from app js");
    setProfile(user);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="mb-5 text-center">App Title</h1>
            <Form onFormSubmitHappen={handleGetUser} />
          </div>
          <div className="col-lg-6">
            <User user={profile} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
