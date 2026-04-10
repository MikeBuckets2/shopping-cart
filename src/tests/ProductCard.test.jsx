import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductCard from '../components/ProductCard';

const fakeProduct = {
  id: 1,
  title: 'Test Jacket',
  price: 49.99,
  thumbnail: 'https://via.placeholder.com/150',
  category: "mens-clothing",
};

describe('ProductCard', () => {
  it('renders product title and price', () => {
    render(<ProductCard product={fakeProduct} addToCart={() => {}} />);
    expect(screen.getByText('Test Jacket')).toBeInTheDocument();
    expect(screen.getByText('$49.99')).toBeInTheDocument();
  });

  it('renders product image with correct alt text', () => {
    render(<ProductCard product={fakeProduct} addToCart={() => {}} />);
    expect(screen.getByRole('img', { name: 'Test Jacket' })).toBeInTheDocument();
  });

  it('calls addToCart when button is clicked', async () => {
    const mockAddToCart = vi.fn();
    render(<ProductCard product={fakeProduct} addToCart={mockAddToCart} />);
    await userEvent.click(screen.getByText('Add to Cart'));
    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    expect(mockAddToCart).toHaveBeenCalledWith(fakeProduct, 1);
  });

  it('increments quantity when + is clicked', async () => {
    render(<ProductCard product={fakeProduct} addToCart={() => {}} />);
    const input = screen.getByRole('spinbutton', { name: 'Quantity' });
    await userEvent.click(screen.getByLabelText('Increase quantity'));
    expect(input.value).toBe('2');
  });

  it('does not decrement below 1', async () => {
    render(<ProductCard product={fakeProduct} addToCart={() => {}} />);
    const input = screen.getByRole('spinbutton', { name: 'Quantity' });
    await userEvent.click(screen.getByLabelText('Decrease quantity'));
    expect(input.value).toBe('1');
  });
});