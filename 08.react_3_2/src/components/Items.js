import React, { useState, useEffect } from "react";
import { ListGroupItem, Button } from "react-bootstrap";

const Items = ({ getItems }) => {
  const [items, setItems] = useState([]);
  const [addNum, setAddNum] = useState(0);

  const handleAddBtnClick = () => {
    setAddNum(addNum + 5);
  };

  useEffect(() => {
    setItems(getItems(addNum));
    console.log("Component Item");
  }, [getItems, addNum]);

  return (
    <>
      {items.map((item) => (
        <ListGroupItem key={item} className="d-flex justify-content-between">
          {item}
          <Button onClick={handleAddBtnClick}>Add 5+</Button>
        </ListGroupItem>
      ))}
    </>
  );
};

export default Items;
