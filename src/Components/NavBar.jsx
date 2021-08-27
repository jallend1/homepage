import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <p>
        <NavLink to='/' className='logo' exact activeClassName=''>
          Jason D. Allen
        </NavLink>
      </p>
      <ul className='menu'>
        <li>
          <NavLink to='/' className='menu-item' exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className='menu-item' to='/projects'>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className='menu-item'>
            About
          </NavLink>
        </li>
        <li className='menu-item cta'>
          CONTACT
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
