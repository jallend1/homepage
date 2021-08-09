import { Link, BrowserRouter } from 'react-router-dom';

const NavBar = () => {
  return (
    <BrowserRouter>
      <nav>
        <p>
          <Link to='/' className='logo'>
            Jason D. Allen
          </Link>
        </p>
        <div>
          <ul className='menu'>
            <li>
              <Link to='/' className='menu-item'>
                Home
              </Link>
            </li>
            <li>
              <Link className='menu-item' to='/projects'>
                Projects
              </Link>
            </li>
            <li>
              <Link to='/about' className='menu-item'>
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </BrowserRouter>
  );
};

export default NavBar;
