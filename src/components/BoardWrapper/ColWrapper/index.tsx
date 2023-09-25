import React from "react";
import Card from "react-bootstrap/Card";
import "../styles.css";

interface ColWrapperProps {
  name: string;
  children: any;
}

const ColWrapper: React.FC<ColWrapperProps> = ({ name, children }) => {
  return (
    <Card className="col">
      <Card.Title>{name}</Card.Title>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};

export default ColWrapper;
