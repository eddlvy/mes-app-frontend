import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../context/context";
import { useContext } from "react";


function PrivateRoute() {
  const { logged } = useContext(Context);
  const auth = logged

  return (
    auth ? <Outlet /> : <Navigate to={'/'} />
  )
}

export default PrivateRoute;