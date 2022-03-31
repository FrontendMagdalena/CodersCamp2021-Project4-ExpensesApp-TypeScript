import { render, screen } from '@testing-library/react';
import ResetPasswordPage from './ResetPasswordPage';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Check if view is rendered', () => {
  it('Should render LoginPage view without crashing', () => {
    render(
      <Router>
        <ResetPasswordPage />
      </Router>,
    );
    screen.getByRole('heading', { name: 'Zapomniałeś hasła?' });
  });
});
