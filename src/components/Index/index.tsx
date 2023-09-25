import React from "react";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  return (
    <div>
      <ul className="App-header">
        <li>
          <Link to="/react-dnd">React-DnD-Board</Link>
        </li>
        <li>
          <Link to="/react-beautiful-dnd">React-Beautiful-DnD-Board</Link>
        </li>
      </ul>
    </div>
  );
};

export default Index;
