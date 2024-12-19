import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Homologations from "./page/Homologations";

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-[#1b2939] font-[Ubuntu,serif]">
        <Sidebar />
        <div className="flex-1 overflow-hidden">
          <Routes>
            {/* Redirect from / to /homologations */}
            <Route path="/" element={<Navigate to="/homologations" replace />} />
            <Route path="/homologations" element={<Homologations />} />
            
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
