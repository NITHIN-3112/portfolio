import "./App.css";
import React from "react";
import { Card2Example } from "./components/card";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Profile from "./components/profile";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Card2Example />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
