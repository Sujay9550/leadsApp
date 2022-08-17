import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import * as classes from "./Navbar.module.css";

const Navbar = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className={`navbar-brand fw-bold ${classes.brand}`}>LeadsApp</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {isLoggedIn && (
              <li className="nav-item px-2">
                <Link to="/leads" className="nav-link active">
                  Leads
                </Link>
              </li>
            )}
            {isLoggedIn && (
              <li className="nav-item px-2">
                <Link to="/new-lead" className="nav-link">
                  Create
                </Link>
              </li>
            )}
          </ul>

          <ul className="navbar-nav ms-auto">
            {!isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link" to="/auth">
                  Login
                </Link>
              </li>
            )}

            {isLoggedIn && (
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle loginuser"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Welcome User
                </a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className={`dropdown-item ${classes.logout}`}
                      onClick={logoutHandler}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
