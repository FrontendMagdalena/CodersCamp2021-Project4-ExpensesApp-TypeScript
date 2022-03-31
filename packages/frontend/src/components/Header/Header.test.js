import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

describe('component render', () => {
  test('render Header component', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    // const header = screen.getByRole('banner');
    // expect(header).toBeInTheDocument();
  });
});
