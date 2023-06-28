import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ROUTES from "./components/routes";
import ForgetPassword from "./components/ForgetPassword";

function App() {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.home} element={<Login />} />
        <Route path={ROUTES.register} element={<Register />} />
        <Route path={ROUTES.password} element={<ForgetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
