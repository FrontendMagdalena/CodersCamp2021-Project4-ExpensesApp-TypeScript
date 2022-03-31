import { render, screen } from '@testing-library/react';
import LimitPage from './LimitPage';
import { AccountsContext } from '../../reducers/accounts.reducer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Check if view is rendered', () => {
  it('Should render Limit view without crashing', () => {
    const limits = [
      {
        list: {
          Remont: {
            value: 1,
            reached: true,
          },
        },
      },
    ];

    const limitsState = [limits];

    render(
      <Router>
        <AccountsContext.Provider value={{ limitsState }}>
          <LimitPage />
        </AccountsContext.Provider>
        ,
      </Router>,
    );
    screen.getByRole('heading', { name: 'Ustaw limit miesięczny' });
  });
});
