import React, { useState } from "react";

const Form = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [pass, setPass] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // const data = {
    //   name,
    //   email,
    //   password,
    // };

    // console.log("form submited.");
    // console.log(data);
    // console.log(`name: ${data.name}, email: ${data.email}`);
    // setName("");
    // setEmail("");
    // setPass("");

    console.log(user);
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  // input da change kimi isleyir:

  //   const handleNameInput = (e) => {
  //     console.log("input:");
  //     console.log(e.target.value);
  //   };

  //   const handleNameChange = (e) => {
  //     setName(e.target.value);
  //   };

  //   const handleEmailChange = (e) => {
  //     setEmail(e.target.value);
  //   };

  //   const handlePassChange = (e) => {
  //     setPass(e.target.value);
  //   };

  const handleInputChange = (input, e) => {
    setUser({
      ...user,
      [input]: e.target.value,
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <div className="row">
            <div className="col-lg-6">
              <input
                type="text"
                name="firstname"
                placeholder="Firstname"
                className="form-control"
                value={user.name}
                // onInput={handleNameInput}
                // onChange={handleNameChange}
                onChange={(e) => handleInputChange("name", e)}
              />
              <br />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                value={user.email}
                // onChange={handleEmailChange}
                onChange={(e) => handleInputChange("email", e)}
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
                value={user.password}
                // onChange={handlePassChange}
                onChange={(e) => handleInputChange("password", e)}
              />
              {/* <span className="text-info">{name}</span>
              <br /> */}
              <button className="my-2 btn btn-success">Gonder</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
