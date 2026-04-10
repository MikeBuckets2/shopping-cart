import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartItem from '../components/CartItem';

const fakeItem = {
  id: 1,
  title: 'Test Jacket',
  price: 49.99,
  thumbnail: 'https://via.placeholder.com/150',
  quantity: 2,
};

describe('CartItem', () => {
  it('renders item title and quantity', () => {
    render(
      <CartItem item={fakeItem} updateQuantity={() => {}} removeFromCart={() => {}} />
    );
    expect(screen.getByText('Test Jacket')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('shows correct subtotal', () => {
    render(
      <CartItem item={fakeItem} updateQuantity={() => {}} removeFromCart={() => {}} />
    );
    expect(screen.getByText('$99.98')).toBeInTheDocument();
  });

  it('calls removeFromCart when Remove is clicked', async () => {
    const mockRemove = vi.fn();
    render(
      <CartItem item={fakeItem} updateQuantity={() => {}} removeFromCart={mockRemove} />
    );
    await userEvent.click(screen.getByText('Remove'));
    expect(mockRemove).toHaveBeenCalledWith(1);
  });

  it('calls updateQuantity with incremented value', async () => {
    const mockUpdate = vi.fn();
    render(
      <CartItem item={fakeItem} updateQuantity={mockUpdate} removeFromCart={() => {}} />
    );
    await userEvent.click(screen.getByLabelText('Increase quantity'));
    expect(mockUpdate).toHaveBeenCalledWith(1, 3);
  });
});