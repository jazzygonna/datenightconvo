import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DateNightGame from "./pages/DateNightGame";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DateNightGame />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
