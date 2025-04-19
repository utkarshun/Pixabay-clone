// ✅ App.jsx
import React from "react";
import Images from "./components/Images";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Images></Images>
    </div>
  );
}

export default App; // <- This is required!
