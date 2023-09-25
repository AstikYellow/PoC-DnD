import React from "react";
import ItemWrapper from "../../BoardWrapper/ItemWrapper";
import { useDrag } from "react-dnd";
import { ITEM_TYPE } from "../../../constants/types";

interface ItemProps {
  item: any;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ITEM_TYPE,
    collect: (monitor) => {
      console.log(monitor);
      return {
        isDragging: !!monitor.isDragging(),
      };
    },
  }));
  return (
    <ItemWrapper ref={drag} item={item} isDragging={isDragging}></ItemWrapper>
  );
};

export default Item;
