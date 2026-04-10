import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-text">
          <span className="hero-tag">New arrivals every week</span>
          <h1>Quality goods, no nonsense.</h1>
          <p>
            Browse our hand-picked selection of everyday items at prices that
            actually make sense. No gimmicks, no flash sales just good stuff.
          </p>
          <Link to="/shop" className="hero-btn">
            Start Shopping
          </Link>
        </div>
        <div className="hero-visual">
          <div className="hero-box box-1">📦</div>
          <div className="hero-box box-2">🛍️</div>
          <div className="hero-box box-3">✨</div>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <span className="feature-icon">🚚</span>
          <h3>Fast Shipping</h3>
          <p>Orders dispatched within 24 hours on weekdays.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">↩️</span>
          <h3>Easy Returns</h3>
          <p>Changed your mind? Send it back within 30 days, no questions.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🔒</span>
          <h3>Secure Checkout</h3>
          <p>Your payment info is encrypted and never stored.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;