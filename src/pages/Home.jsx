import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1 className="hero-heading">THE SHOP.</h1>
        <p className="hero-sub">New products added every week.</p>
        <Link to="/shop" className="hero-btn">Shop Now</Link>
      </section>
    </div>
  );
}

export default Home;