import { render, screen } from '@testing-library/react';
import card from './card.js';

test('renders learn react link', () => {
  render(<card />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});