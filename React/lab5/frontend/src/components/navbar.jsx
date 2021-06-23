import { NavLink as Link } from "react-router-dom";
export default function Nav_bar() {
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
                Home
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input type="button" className="" value="Register" />
          </form>
        </div>
      </div>
    </nav>
  );
}
