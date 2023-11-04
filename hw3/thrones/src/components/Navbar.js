import { Link as NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/navbar.css';

function NavigationBar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <h1
        className='navbar-brand'
        style={{ fontFamily: 'cursive', marginLeft: '9px' }}
      >
        GAME OF THRONES
      </h1>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
          <NavLink to='/home' className='nav-link'>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/search' className='nav-link'>
            Search
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/houses' className='nav-link'>
            Houses
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
