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

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <Header />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/profile" Component={Profile} />
            <Route path="/task/new" Component={AddTask} />
            <Route path="/task/edit/:id" Component={AddTask} />
            <Route path="/task/:id" Component={OpenTask} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/*" Component={NotFound} />
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
