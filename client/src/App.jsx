import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { UserProvider } from "./UserContext";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <h1 className="text-3xl font-bold max-w-7xl mx-auto">
                  Hello world!
                </h1>
              }
            />
            <Route
              path="/profile"
              element={
                <h1 className="text-3xl font-bold max-w-7xl mx-auto">
                  Profile
                </h1>
              }
            />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
