import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
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
              <h1 className="text-3xl font-bold max-w-7xl mx-auto">Profile</h1>
            }
          />
          <Route
            path="/login"
            element={
              <h1 className="text-3xl font-bold max-w-7xl mx-auto">Login</h1>
            }
          />
          <Route
            path="/register"
            element={
              <h1 className="text-3xl font-bold max-w-7xl mx-auto">Signup</h1>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
