import React from "react";
import LeftNav from "./components/LeftNav";
import TopNav from "./components/TopNav";
import Content from "./components/Content/Content";

export default function App() {
  return (
    <div className="App">
      <TopNav />
      <LeftNav />
      <Content />
    </div>
  );
}
