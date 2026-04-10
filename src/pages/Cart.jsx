import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import '../styles/Cart.css';

function Cart({ cartItems, updateQuantity, removeFromCart }) {

  // Bug: forgot to multiply by quantity
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <p>Your cart is empty.</p>
        <Link to="/shop" className="back-to-shop">
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h1 className="cart-heading">Your Cart</h1>
      <div className="cart-list">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
      <div className="cart-summary">
        <p className="cart-total">Total: ${totalPrice.toFixed(2)}</p>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;