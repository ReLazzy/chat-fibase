import React, { FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Route, Routes } from "react-router-dom";
import { auth } from "../config/fbConfig";
import { privatRoutes, publicRoutes, RouteNames } from "../router";
import Loader from "./Loader";

const AppRouter: FC = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loader></Loader>;
  }
  return user ? (
    <Routes>
      {privatRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.element />}
        ></Route>
      ))}
      <Route path="*" element={<Navigate replace to={RouteNames.CHAT} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.element />}
        ></Route>
      ))}
      <Route path="*" element={<Navigate replace to={RouteNames.LOGIN} />} />
    </Routes>
  );
};

export default AppRouter;
