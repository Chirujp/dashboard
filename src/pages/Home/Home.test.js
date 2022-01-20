import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders title link', () => {
  render(<Home />);
  const titleElement = screen.getByText(/Chiru チル - Dashboard/i);
  expect(titleElement).toBeInTheDocument();
});
