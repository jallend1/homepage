import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <p>
        <NavLink to='/' className='logo' exact activeClassName=''>
          Jason D. Allen
        </NavLink>
      </p>
      <div>
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
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
