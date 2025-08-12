import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header with get started button', () => {
  render(<App />);
  const buttonElements = screen.getAllByText(/get started/i);
  expect(buttonElements.length).toBeGreaterThan(0);
});
