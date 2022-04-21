import { PieChart } from 'react-minimal-pie-chart';
import { StyledChart } from './Chart.styles';

const categories = [
  {
    id: 0,
    title: 'Wszystkie',
    value: 800,
    color: '#638E2B',
  },
  {
    id: 1,
    title: 'Ubrania',
    value: 100,
    color: '#F4600C',
  },
  {
    id: 2,
    title: 'Remont',
    value: 200,
    color: '#E5E5E5',
  },
  {
    id: 3,
    title: 'Leczenie',
    value: 200,
    color: '#E5E5E5',
  },
  {
    id: 4,
    title: 'Inne',
    value: 200,
    color: '#E5E5E5',
  },
];

export default function Chart() {
  return (
    <StyledChart data-testid="chart">
      {/* placeholder for date inputs */}
      {/* placeholder for buttons */}
      <PieChart data={categories} animate />
    </StyledChart>
  );
}
