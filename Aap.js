import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Aap = () => {
  return <div>app ki adalat</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Aap />);
