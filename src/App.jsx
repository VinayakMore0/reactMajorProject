import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="w-screen h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
