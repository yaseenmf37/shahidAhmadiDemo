// src/App.js
import React from "react";
import ChatBox from "./components/ChatBox";
import "animate.css";
import "./index.css";

function App() {
  return (
    <div className="app-container flex justify-center items-center h-screen bg-gray-100">
      <div className="chatbox-wrapper w-full">
        <ChatBox />
      </div>
    </div>
  );
}

export default App;
