import React from "react";
import Card from "react-bootstrap/Card";
import "../styles.css";

interface ItemProps {
  item?: any;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <Card className="item">
      <Card.Title>{item.title}</Card.Title>
      <Card.Body>{item.content}</Card.Body>
    </Card>
  );
};

export default Item;
