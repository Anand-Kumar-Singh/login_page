import React, { Suspense } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Login />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Index />);
