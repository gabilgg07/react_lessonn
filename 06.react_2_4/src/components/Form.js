import React, { useState } from "react";

const Form = (props) => {
  //#region old codes

  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [pass, setPass] = useState("");

  //#endregion

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const checkPasswordLen = (len) => {
    if (len === 0) {
      setError("Password must be filled");
      return false;
    } else if (len < 4) {
      setError(
        `${
          4 - len
        } characters left before the password exceeds the minimum value`
      );
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //#region old codes

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

    //#endregion

    if (!checkPasswordLen(user.password.trim().length)) return;

    props.onFormSubmitHappen(user);

    // console.log(user);

    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  //#region old codes

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

  //#endregion

  const handleInputChange = (input, e) => {
    let value = e.target.value;
    setUser({
      ...user,
      [input]: value,
    });

    if (input === "password") {
      checkPasswordLen(value.trim().length);
    }
  };

  const handlePassFocus = () => {
    setError("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <div className="row">
          <div className="col-lg-12">
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
            <div className="box-input">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
                value={user.password}
                // onChange={handlePassChange}
                onChange={(e) => handleInputChange("password", e)}
                onFocus={handlePassFocus}
              />
              {Boolean(error) && <span className="error">{error}</span>}
            </div>

            {/* <span className="text-info">{name}</span>
            <br /> */}
            <button className="my-2 btn btn-success">Gonder</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
