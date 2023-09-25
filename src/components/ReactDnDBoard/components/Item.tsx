import React from "react";
import ItemWrapper from "../../BoardWrapper/ItemWrapper";
import { useDrag } from "react-dnd";
import { ITEM_TYPE } from "../../../constants/types";
import Card from "react-bootstrap/Card";

interface ItemProps {
  item: any;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ITEM_TYPE,
    item: item,
    collect: (monitor) => {
      return {
        isDragging: !!monitor.isDragging(),
      };
    },
  }));
  return (
    <ItemWrapper isDragging={isDragging}>
      <Card className="item" ref={drag}>
        <Card.Title>{item.title}</Card.Title>
        <Card.Body>{item.content}</Card.Body>
      </Card>
    </ItemWrapper>
  );
};

export default Item;
