import { Router } from "@reach/router";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/setting/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
function App() {
  return (
    <Router>
      <Home exact path="/" />
      <Register path="/register" />
      <Login path="/login" />
      <Write path="/write" />
      <Settings path="/setting" />
      <Single path="/post/:postId" />
    </Router>
  );
}

export default App;
