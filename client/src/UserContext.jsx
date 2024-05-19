/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import getEnvs from "./helpers/getEnvs";
import errorOrganizer from "./helpers/errorOrganizer";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { serverUrl } = getEnvs();

  useEffect(() => {
    checkLoggedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkLoggedIn = async () => {
    try {
      const response = await axios.get(serverUrl + "/user/auth", {
        withCredentials: true,
      });
      setUser(response.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await axios.post(
        serverUrl + "/user/login",
        { email, password },
        { withCredentials: true }
      );
      setUser(response.data.data);
      navigate("/");
    } catch (error) {
      errorOrganizer(error);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (userData) => {
    try {
      setLoading(true);
      const { data } = await axios.post(serverUrl + "/user/", userData);
      if (!data.success) return new Error("Internal server error");
      alert(data.message);
      navigate("/login");
    } catch (error) {
      errorOrganizer(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await axios.post(
        serverUrl + "/user/logout",
        {},
        { withCredentials: true }
      );
      setUser(null);
    } catch (error) {
      errorOrganizer(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </UserContext.Provider>
  );
};
