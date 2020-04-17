import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="app-wrapper container">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
