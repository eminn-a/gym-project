import { useContext } from "react";
import { UserContext } from "../context/authContext";
import { Navigate, Outlet } from "react-router-dom";

export default function AtuhGuard() {
  const { userData } = useContext(UserContext);

  return userData ? <Outlet /> : <Navigate to="/" />;
}
