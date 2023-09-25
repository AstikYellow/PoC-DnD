import React from "react";
import Card from "react-bootstrap/Card";
import Col from "./Col";
import { COLUMN } from "../../constants/types";
import { data } from "../../constants/data";
import "./styles.css";

interface BoardProps {
  title: string;
}

const Board: React.FC<BoardProps> = ({ title }) => {
  return (
    <Card className="main-board">
      <Card.Title>{title}</Card.Title>
      <Card.Body className="col-board">
        {COLUMN.map((col) => (
          <Col name={col} itemList={data} />
        ))}
      </Card.Body>
    </Card>
  );
};

export default Board;
