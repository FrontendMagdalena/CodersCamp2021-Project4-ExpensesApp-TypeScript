import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AccountsContext } from '../../../reducers/accounts.reducer';
import RegisterPage from './RegisterPage';

const usersData = [
  {
    id: 1,
    email: 'admin@scrooge.com',
    password: 'pass1234',
  },
];

describe('Check if view is rendered', () => {
  it('Should render RegisterPage view without crashing', () => {
    const users = [usersData];
    render(
      <Router>
        <AccountsContext.Provider value={{ users }}>
          <RegisterPage />
        </AccountsContext.Provider>
      </Router>,
    );
    screen.getByRole('heading', { name: 'Rejestracja:' });
  });
});
