import { Link, BrowserRouter } from 'react-router-dom';

const NavBar = () => {
  return (
    <BrowserRouter>
      <nav>
        <p className='logo'>
          <Link to='/'>Jason D. Allen</Link>
        </p>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </BrowserRouter>
  );
};

export default NavBar;
