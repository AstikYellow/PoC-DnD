import React from "react";
import Card from "react-bootstrap/Card";
import Item from "../Item";
import "../styles.css";

interface ColProps {
  name: string;
  itemList?: any[];
}

const Col: React.FC<ColProps> = ({ name, itemList = [] }) => {
  return (
    <Card className="col">
      <Card.Title>{name}</Card.Title>
      <Card.Body>
        {itemList.map((item) => {
          return item.status === name && <Item item={item} />;
        })}
      </Card.Body>
    </Card>
  );
};

export default Col;
