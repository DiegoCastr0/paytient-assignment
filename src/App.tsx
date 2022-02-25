import React from "react";
import "./App.css";
import { Posts } from "./components";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Hi!</h1>
      <Posts />
    </div>
  );
};

export default App;
