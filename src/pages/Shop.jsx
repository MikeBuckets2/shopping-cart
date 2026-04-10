import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';
import '../styles/Shop.css';

function Shop({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div className="shop-status">Loading products...</div>;
  if (error) return <div className="shop-status shop-error">Error: {error}</div>;

  return (
    <div className="shop">
      <h1 className="shop-heading">The Shop</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

Shop.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Shop;