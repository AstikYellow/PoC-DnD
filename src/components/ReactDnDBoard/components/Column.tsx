import React from "react";
import Item from "./Item";
import { useDrop } from "react-dnd";
import { ITEM_TYPE, TASK } from "../../../constants/types";
import Card from "react-bootstrap/Card";

interface ColProps {
  name: string;
  itemList?: TASK[];
  update: React.Dispatch<React.SetStateAction<TASK[]>>;
}

const Column: React.FC<ColProps> = ({ name, itemList = [], update }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ITEM_TYPE,
    drop: (item) => onUpdateBoard(item),
    collect: (monitor) => {
      return {
        isOver: !!monitor.isOver(),
      };
    },
  }));

  const onUpdateBoard = (item) => {
    const newBoard = itemList.map((it) => {
      if (it === item) {
        return { ...it, id: item.id, status: name };
      }

      return it;
    });

    update(newBoard);
  };

  return (
    <Card className="col" ref={drop}>
      <Card.Title>{name}</Card.Title>
      <Card.Body>
        {itemList.map((item) => {
          return item.status === name && <Item item={item} />;
        })}
      </Card.Body>
    </Card>

    // <ColWrapper name={name} ref={drop}>
    //   {itemList.map((item) => {
    //     return item.status === name && <Item item={item} />;
    //   })}
    // </ColWrapper>
  );
};

export default Column;
