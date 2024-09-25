import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Header from "./components/Header";
import Login from "./pages/register/Login";
import Register from "./pages/register/Register";
import Ranking_page from "./pages/Ranking_page";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ranking" element={<Ranking_page />} />
      </Routes>
    </div>
  );
};

export default App;
