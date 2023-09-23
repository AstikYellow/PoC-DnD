import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import ReactDnDBoard from "./components/ReactDnDBoard";
import ReactBeautifulDnDBoard from "./components/ReactBeautifulDnDBoard";

const notFound = () => <div>Page Not Found Some error occured</div>;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} errorElement={notFound}></Route>
        <Route
          path="/react-dnd"
          element={<ReactDnDBoard />}
          errorElement={notFound}
        ></Route>
        <Route
          path="/react-beautiful-dnd"
          element={<ReactBeautifulDnDBoard />}
          errorElement={notFound}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
