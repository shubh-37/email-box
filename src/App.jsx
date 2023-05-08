import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import SingleMailPage from "./pages/SingleMailPage";
import SpamPage from "./pages/SpamPage";
import TrashPage from "./pages/TrashPage";

function App() {
  return (
    <React.Fragment>
      <h1 className="heading">Shubh Arya's mail box</h1>
      <div className="parent">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/spam" element={<SpamPage />} />
          <Route path="/trash" element={<TrashPage />} />
          <Route path="/email/:mailId" element={<SingleMailPage />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
