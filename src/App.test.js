import React from 'react';  // Add this line
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello React from Docker', () => {
  render(<App />);
  const textElement = screen.getByText(/Hello React from Docker/i);
  expect(textElement).toBeInTheDocument();
});
