import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <p>
        <NavLink to="/" className="logo" exact activeClassName="">
          Jason D. Allen
        </NavLink>
      </p>
      <ul className="menu">
        <li>
          <NavLink to="/" className="menu-item" exact>
            1. Home
          </NavLink>
        </li>
        <li>
          <NavLink className="menu-item" to="/projects">
            2. Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="menu-item">
            3. About
          </NavLink>
        </li>
        <li className="menu-item cta">CONTACT</li>
      </ul>
    </nav>
  );
};

export default NavBar;
