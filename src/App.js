import { Router } from "@reach/router";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/setting/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
function App() {
  const user = false;
  return (
    <Router>
      <Home exact path="/" />
      {user ? <Home exact path="/" /> : <Register path="/register" />}
      {user ? <Home exact path="/" /> : <Login path="/login" />}
      {user ? <Write path="/write" /> : <Register path="/register" />}
      {user ? <Settings path="/setting" /> : <Register path="/register" />}
      <Single path="/post/:postId" />
    </Router>
  );
}

export default App;
