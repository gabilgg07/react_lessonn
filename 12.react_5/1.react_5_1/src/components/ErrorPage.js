import React from "react";
// import { useNavigate } from "react-router-dom";

const ErrorPage = ({ error }) => {
  //   const navigate = useNavigate();

  //   const handleHomeBtnClick = () => {
  //     navigate("/");
  //   };

  document.styleSheets[0].addRule(
    "#not_found h1:after",
    'content: "' + error.response.status + '";'
  );

  return (
    <div id="not_found">
      <h1>{error.response.status}</h1>
      <div className="cloak__wrapper">
        <div className="cloak__container">
          <div className="cloak"></div>
        </div>
      </div>
      <div className="info">
        <h2>{error.name}</h2>
        <p>{error.message}</p>
        {/* <button onClick={handleHomeBtnClick} className="btn btn-secondary me-2">
          Home
        </button>
        <button
          onClick={() => navigate(-1)}
          className="btn btn-outline-secondary"
        >
          Go Back
        </button> */}
      </div>
    </div>
  );
};

export default ErrorPage;
