import React from "react";

const OtherComponent = ({ name }) => {
  return <div>{name}</div>;
};

OtherComponent.defaultProps = {
  name: "Vusal",
};

export default OtherComponent;
