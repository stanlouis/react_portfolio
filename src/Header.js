import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ children }) => (
  <React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-dark mb-5 bg-dark">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/jokes">
            Jokes
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/music-master">
            Music Master
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/evens-or-odds">
            Evens or Odds
          </Link>
        </li>
      </ul>
    </nav>
    {children}
  </React.Fragment>
);

export default Header;
