import NavbarLink from "./NavbarLink";
import { Link } from "react-router-dom";
import logo from "../../assets/img/link.png";
import classes from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={"navbar navbar-dark navbar-expand-lg " + classes.navbarRed}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img className={classes.logo} src={logo} alt="heyURL!" /> heyURL!
        </Link>
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
        <div className="collapse navbar-collapse">
          <div className="container">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavbarLink url="/" text="Home" />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
