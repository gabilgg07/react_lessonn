import React from "react";
import CustomIcon from "./CustomIcon";

const Cart = ({ amount }) => {
  return (
    <React.Fragment>
      <div className="cart_title">
        <h1>
          <span>Cart</span> Title
        </h1>
      </div>
      <div className="cart_body">
        <div className="cart_body_bg">
          <p>Cart Body</p>
          <CustomIcon n={amount ?? +50} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
