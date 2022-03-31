import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './LoginPage';
import { AccountsContext } from '../../../reducers/accounts.reducer';

const usersData = [
  {
    id: 1,
    email: 'admin@scrooge.com',
    password: 'pass1234',
  },
];

describe('Check if view is rendered', () => {
  it('Should render LoginPage view without crashing', () => {
    const users = [usersData];

    render(
      <Router>
        <AccountsContext.Provider value={{ users }}>
          <LoginPage />
        </AccountsContext.Provider>
      </Router>,
    );
    screen.getByRole('heading', { name: 'Logowanie:' });
  });
});
