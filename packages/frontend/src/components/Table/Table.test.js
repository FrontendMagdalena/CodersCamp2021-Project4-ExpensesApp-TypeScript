import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from './Table';
import { AccountsContext } from '../../reducers/accounts.reducer';

const initialData = [
  {
    id: '1',
    amount: 520,
    category: 'Remont',
    title: 'Farby i kleje',
    date: '2022-01-10',
    attachment: null,
    type: 'Wydatek',
  },
];

describe('Check if component is rendered', () => {
  test('Display the Table component', () => {
    const accountsState = [initialData];

    render(
      <AccountsContext.Provider value={{ accountsState }}>
        <Table />
      </AccountsContext.Provider>,
    );

    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });
});
