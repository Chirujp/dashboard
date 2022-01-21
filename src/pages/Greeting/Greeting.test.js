import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders title link', () => {
  render(<Greeting />);
  const titleElement = screen.getByText(/Chiru チル - Dashboard/i);
  expect(titleElement).toBeInTheDocument();
});
