import React from "react";
import Board from "../Board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ReactDnDBoard: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Board title="React-DnD proj Dashboard" />
    </DndProvider>
  );
};

export default ReactDnDBoard;
