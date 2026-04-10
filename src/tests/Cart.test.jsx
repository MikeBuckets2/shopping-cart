import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cart from '../pages/Cart';

describe('Cart page', () => {
  it('shows empty message when cart has no items', () => {
    render(
      <MemoryRouter>
        <Cart cartItems={[]} updateQuantity={() => {}} removeFromCart={() => {}} />
      </MemoryRouter>
    );
    expect(screen.getByText('Your cart is empty.')).toBeInTheDocument();
  });

  it('renders cart items when they exist', () => {
    const items = [
      {
        id: 1,
        title: 'Test Jacket',
        price: 49.99,
        thumbnail: 'https://via.placeholder.com/150',
        quantity: 1,
      },
    ];
    render(
      <MemoryRouter>
        <Cart cartItems={items} updateQuantity={() => {}} removeFromCart={() => {}} />
      </MemoryRouter>
    );
    expect(screen.getByText('Test Jacket')).toBeInTheDocument();
  });

  it('displays the correct total price', () => {
    const items = [
      { id: 1, title: 'Item A', price: 10.00, thumbnail: '', quantity: 2 },
      { id: 2, title: 'Item B', price: 5.00, thumbnail: '', quantity: 1 },
    ];
    render(
      <MemoryRouter>
        <Cart cartItems={items} updateQuantity={() => {}} removeFromCart={() => {}} />
      </MemoryRouter>
    );
    expect(screen.getByText('Total: $25.00')).toBeInTheDocument();
  });
});