import React from "react";

const CustomIcon = ({ n }) => {
  return (
    <>
      <div className="big_cub">
        <div className="small_cub_buttom r_to_center">{n.toString()}</div>
        <div className="small_cub_top r_to_center">{n && n + 50}</div>
      </div>
      <div className="big_circle">
        <div className="small_circle"></div>
      </div>
    </>
  );
};

export default CustomIcon;
