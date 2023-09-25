import React from "react";
import ColWrapper from "../../BoardWrapper/ColWrapper";
import Item from "./Item";

interface ColProps {
  name: string;
  itemList?: any[];
}

const Column: React.FC<ColProps> = ({ name, itemList = [] }) => {
  return (
    <ColWrapper name={name}>
      {itemList.map((item) => {
        return item.status === name && <Item item={item} />;
      })}
    </ColWrapper>
  );
};

export default Column;
