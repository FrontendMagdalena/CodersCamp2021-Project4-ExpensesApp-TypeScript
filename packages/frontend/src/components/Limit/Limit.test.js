import { render, screen } from '@testing-library/react';
import Limit from './Limit';
import { AccountsContext } from '../../reducers/accounts.reducer';

describe('Check if component is rendered', () => {
  it('Should render Limit component without crashing', () => {
    const limits = {
      list: {
        Remont: {
          value: 1,
          reached: true,
        },
      },
    };

    const limitsState = limits;

    render(
      <AccountsContext.Provider value={{ limitsState }}>
        <Limit limitList={limits.list} />
      </AccountsContext.Provider>,
    );
    screen.getByLabelText('limit-icon');
  });
});
