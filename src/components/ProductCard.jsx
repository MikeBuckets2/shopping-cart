import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/ProductCard.css';

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  function handleDecrement() {
    setQuantity(quantity - 1);
  }

  function handleIncrement() {
    setQuantity(quantity + 1);
  }

  function handleInputChange(e) {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  }

  function handleAddToCart() {
    addToCart(product, quantity);
    setQuantity(1);
  }

  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
      <div className="product-actions">
        <div className="quantity-controls">
          <button onClick={handleDecrement} aria-label="Decrease quantity">−</button>
          <input
            type="number"
            value={quantity}
            onChange={handleInputChange}
            min="1"
            aria-label="Quantity"
          />
          <button onClick={handleIncrement} aria-label="Increase quantity">+</button>
        </div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;