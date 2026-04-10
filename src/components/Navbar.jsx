import '../styles/Navbar.css';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">ShopReact</a>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li>
          <a href="/cart" className="cart-link">
            Cart
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;