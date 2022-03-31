import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Homepage from './Homepage';

describe('Check if view is rendered', () => {
  it('Should render Homepage view without crashing', () => {
    render(
      <Router>
        <Homepage />
      </Router>,
    );
    screen.getByRole('heading', { name: 'Odzyskaj kontrolę nad wydatkami!' });
  });
});
