// import logo from './logo.svg';
// import './App.css';

import Header from "./user/Header";
import LatestProduct from "./user/LatestProduct";
import Slide from "./user/Slide";
import Navbar from "./user/Navbar";
import Login from "./user/Login";

import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Navbar />
            <Slide />
            <LatestProduct />
          </>
        } />

        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
