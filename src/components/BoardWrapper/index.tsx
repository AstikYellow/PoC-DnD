import React from "react";
import Card from "react-bootstrap/Card";
import "./styles.css";

interface BoardWrapperProps {
  title: string;
  children: any;
}

const BoardWrapper: React.FC<BoardWrapperProps> = ({ title, children }) => {
  return (
    <Card className="main-board">
      <Card.Title>{title}</Card.Title>
      <Card.Body className="col-board">{children}</Card.Body>
    </Card>
  );
};

export default BoardWrapper;
