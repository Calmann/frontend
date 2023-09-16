import { fireEvent, render, screen } from '@testing-library/react';
import SearchPage from './views/SearchPage/SearchPage';

// Vamos implementar futuramente com cypress

describe.skip('Simple test', () => {
  test('render button', () => {
    render(<SearchPage />);
    const buttonElement = screen.getByText(/Buscar/i);
    expect(buttonElement).toBeInTheDocument();
  });
  
  test('render button', () => {
    render(<SearchPage />);
    const buttonElement = screen.getByText(/Buscar/i);
    fireEvent.click(buttonElement)
  });
});