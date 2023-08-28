import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button type="button" className="nav-btn" onClick={handleToggle}>
            <div className="nav-icon">
              {" "}
              {/* <i className="fas fa-align-right" /> */}
              Toggler
            </div>
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Books</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
