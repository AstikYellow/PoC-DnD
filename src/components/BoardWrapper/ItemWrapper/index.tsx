import React from "react";
import Card from "react-bootstrap/Card";
import "../styles.css";

interface ItemWrapperProps {
  item: any;
  ref?: any;
  isDragging?: boolean;
}

const ItemWrapper: React.FC<ItemWrapperProps> = ({
  item,
  ref,
  isDragging = false,
}) => {
  console.log(isDragging, "ItemWrapper");
  return (
    <Card className="item" ref={ref}>
      <Card.Title>{item.title}</Card.Title>
      <Card.Body>{item.content}</Card.Body>
    </Card>
  );
};

export default ItemWrapper;
