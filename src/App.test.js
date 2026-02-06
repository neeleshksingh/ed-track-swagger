import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Development API Dashboard by default', () => {
  render(<App />);
  const dashboardElement = screen.getByText(/Development API Dashboard/i);
  expect(dashboardElement).toBeInTheDocument();
});
