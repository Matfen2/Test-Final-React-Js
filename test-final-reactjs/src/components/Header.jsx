import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h3>INDIE&apos;S WORLD</h3>
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav">
          <li className="nav-item"><Link to="/games" className="nav-link">GAMES</Link></li>
          <li className="nav-item"><Link to="/search" className="nav-link">SEARCH</Link></li>
          <li className="nav-item"><Link to="/wishlist" className="nav-link">WISHLIST</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
