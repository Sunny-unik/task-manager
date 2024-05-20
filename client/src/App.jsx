import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { UserProvider } from "./UserContext";
import Register from "./components/Register";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Profile from "./components/Profile";
import AddTask from "./components/AddTask";
import OpenTask from "./components/OpenTask";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <Header />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/login" Component={Login} />
            <Route path="/*" Component={NotFound} />
            <Route path="/register" Component={Register} />
            <Route
              path="/profile"
              element={
                <ProtectedRoutes>
                  <Profile />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/task/new"
              element={
                <ProtectedRoutes>
                  <AddTask />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/task/edit/:id"
              element={
                <ProtectedRoutes>
                  <AddTask />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/task/:id"
              element={
                <ProtectedRoutes>
                  <OpenTask />
                </ProtectedRoutes>
              }
            />
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
