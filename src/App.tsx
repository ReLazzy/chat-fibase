import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import AppRouter from "./components/AppRouter";
import Chat from "./components/Chat";
import Loader from "./components/Loader";
import Login from "./components/Login";
import { auth } from "./config/fbConfig";

function App() {
  return (
    <BrowserRouter>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;
