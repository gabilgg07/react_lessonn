import React from "react";
import PropTypes from "prop-types";

const CustomComponent = ({
  name,
  age,
  isMarried,
  anyType,
  stringOrNumber,
  node,
  element,
  condition,
  grades,
  arr,
  arr2,
  userShape,
  userExact,
}) => {
  return (
    <div>
      Student name is {name} and his/her age is {age}. One year leter his/her
      age will be {age + 1}.
      <br />
      <ul>
        <li></li>
      </ul>
    </div>
  );
};

CustomComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  anyType: PropTypes.any,
  stringOrNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  node: PropTypes.node,
  element: PropTypes.element,
  condition: PropTypes.oneOf(["start", "end"]),
  grades: PropTypes.array,
  arr: PropTypes.arrayOf(PropTypes.string),
  arr2: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  userShape: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  userExact: PropTypes.exact({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
};

export default CustomComponent;
