import { Link } from "@reach/router";
import Layout from "../../components/layout/Layout";
import "./register.css";

function Register() {
  return (
    <Layout>
      <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label htmlFor="username">Username</label>
        <input
          className="registerInput"
          type="email"
          placeholder="enter your username."
        />
        <label htmlFor="email">Email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="enter your email."
        />
        <label htmlFor="password">Password</label>
        <input
          className="registerInput"
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button className="registerButton"><Link to="/register">Register</Link></button>
      </form>
      <button className="registerRegisterButton"><Link to="/login">Login</Link></button>
    </div>
    </Layout>
  );
}

export default Register;
