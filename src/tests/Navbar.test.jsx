import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  it('renders the site logo', () => {
    render(
      <MemoryRouter>
        <Navbar cartCount={0} />
      </MemoryRouter>
    );
    expect(screen.getByText('ShopReact')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(
      <MemoryRouter>
        <Navbar cartCount={0} />
      </MemoryRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('Cart')).toBeInTheDocument();
  });

  it('does not show badge when cart is empty', () => {
    render(
      <MemoryRouter>
        <Navbar cartCount={0} />
      </MemoryRouter>
    );
    expect(screen.queryByText('0')).not.toBeInTheDocument();
  });

  it('shows correct cart count when items are in cart', () => {
    render(
      <MemoryRouter>
        <Navbar cartCount={5} />
      </MemoryRouter>
    );
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});