import { StyledTable } from './Table.styles';

interface IProps {
  expenses: number,
  incomes: number,
  balance: number,
}
export default function Table({ expenses, incomes, balance }: IProps) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <td>Saldo</td>
          <td>{balance} zł</td>
        </tr>
        <tr>
          <td>Wydatki</td>
          <td>{expenses > 0 ? expenses : 0} zł</td>
        </tr>
        <tr>
          <td>Przychody</td>
          <td>{incomes > 0 ? incomes : 0} zł</td>
        </tr>
      </thead>
    </StyledTable>
  );
}

// Table.propTypes = {
//   expenses: PropTypes.number,
//   incomes: PropTypes.number,
//   balance: PropTypes.number,
//   getBalance: PropTypes.func,
//   response: PropTypes.object,
// };
