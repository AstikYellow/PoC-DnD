import React from "react";
import BoardWrapper from "../../BoardWrapper";
import Column from "./Column";
import { COLUMN } from "../../../constants/types";
import { data } from "../../../constants/data";

const Board: React.FC = () => {
  return (
    <BoardWrapper title="React-DnD proj Dashboard">
      {COLUMN.map((col) => (
        <Column name={col} itemList={data} />
      ))}
    </BoardWrapper>
  );
};

export default Board;
