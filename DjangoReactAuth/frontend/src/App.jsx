// import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const noNavbar =
    location.pathname === "/register" || location.pathname === "/";

  return (
    <>
      {noNavbar ? (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      ) : (
        <Navbar
          content={
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          }
        />
      )}
    </>
  );
}

export default App;
