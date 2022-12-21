import { Link } from "@reach/router";
import "./topBar.css";

function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/">Home</Link>
          </li>
          <li className="topListItem">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link to="/write">WRITE</Link>
          </li>
          {user && (
            <li className="topListItem">
              <Link to="/logout">LOGOUT</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        ) : (
          <div>
            <button>
              <Link to="/login">Login</Link>
            </button>
            <button>
              <Link to="/register">Register</Link>
            </button>
          </div>
        )}
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default TopBar;
