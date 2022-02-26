import React from "react";
import "./App.css";
import { Posts, Layout } from "./components";

const App: React.FC = () => {
  return (
    <Layout>
      <Posts />
    </Layout>
  );
};

export default App;
