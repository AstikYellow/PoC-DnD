import React, { useState } from "react";
import BoardWrapper from "../../BoardWrapper";
import Column from "./Column";
import { COLUMN, TASK } from "../../../constants/types";
import { data } from "../../../constants/data";

const Board: React.FC = () => {
  const [board, setBoard] = useState<TASK[]>(data);

  return (
    <BoardWrapper title="React-DnD proj Dashboard">
      {COLUMN.map((col) => (
        <Column name={col} itemList={board} update={setBoard} />
      ))}
    </BoardWrapper>
  );
};

export default Board;
