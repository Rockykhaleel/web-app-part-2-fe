import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Addsales from "./Pages/Addsales";
import Topsales from "./Pages/Topsales";
import Revenue from "./Pages/Revenue";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Router>
      <Navigation />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route exact path="/addSales" element={<Addsales />} />
          <Route exact path="/topSales" element={<Topsales />} />
          <Route exact path="/revenue" element={<Revenue />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
