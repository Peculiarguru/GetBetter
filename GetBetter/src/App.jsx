import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ROUTES from "./components/routes";
import ForgetPassword from "./components/ForgetPassword";
import Dashboard from "./components/Dashboard";
import Retrospect from "./components/Retrospect";

function App() {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.home} element={<Login />} />
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.dashboard} element={<Dashboard />} />
        <Route path={ROUTES.register} element={<Register />} />
        <Route path={ROUTES.password} element={<ForgetPassword />} />
        <Route path={ROUTES.retrospect} element={<Retrospect />} />
      </Routes>
    </div>
  );
}

export default App;
