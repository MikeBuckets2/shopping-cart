import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/Navbar.css';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">ShopReact</Link>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li>
          <Link to="/cart" className="cart-link">
            Cart
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default Navbar;