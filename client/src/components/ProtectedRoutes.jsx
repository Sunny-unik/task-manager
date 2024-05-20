/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";
import { useEffect } from "react";

export default function ProtectedRoutes({ children }) {
  const { loading, user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      console.log("To access that route, you need to login first");
      navigate("/");
    }
  }, [navigate, loading, user]);

  return <>{children}</>;
}
