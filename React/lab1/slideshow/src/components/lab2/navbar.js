import { Component } from "react";
import { NavLink as Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand">Tasks</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link exact className="nav-link" to="/">
                  Lab1
                </Link>
              </li>
              <li className="nav-item">
                <Link exact className="nav-link" to="/users">
                  Lab2
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/users/adduser">
                  Add User
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users/6">
                  My Profile
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
