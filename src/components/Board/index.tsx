import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const Board: React.FC = () => {
  return (
    <ListGroup horizontal>
      <ListGroup.Item>TODO</ListGroup.Item>
      <ListGroup.Item>IN-PROGRESS</ListGroup.Item>
      <ListGroup.Item>DONE</ListGroup.Item>
    </ListGroup>
  );
};

export default Board;
