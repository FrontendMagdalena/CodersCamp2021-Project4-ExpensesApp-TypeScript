import { render, screen } from '@testing-library/react';
import CategoryList from './CategoryList';

describe('component render', () => {
  test('render CategoryList component', () => {
    render(<CategoryList />);
    const categories = screen.getByText('Wszystkie');
    expect(categories).toBeInTheDocument();
  });
});
