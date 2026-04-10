import PropTypes from 'prop-types';
import '../styles/CartItem.css';

function CartItem({ item, updateQuantity, removeFromCart }) {
  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} className="cart-item-img" />
      <div className="cart-item-info">
        <p className="cart-item-title">{item.title}</p>
        <p className="cart-item-price">${item.price.toFixed(2)} each</p>
        <div className="cart-item-controls">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="cart-item-qty">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>
      <div className="cart-item-right">
        <p className="cart-item-subtotal">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartItem;