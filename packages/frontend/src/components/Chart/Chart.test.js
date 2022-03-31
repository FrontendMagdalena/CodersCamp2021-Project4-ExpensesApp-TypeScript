import { render, screen } from '@testing-library/react';
import Chart from './Chart';

describe('Check if component is rendered', () => {
  it('Should render Chart component without crashing', () => {
    render(<Chart />);

    const chart = screen.getByTestId('chart');

    expect(chart).toBeInTheDocument();
  });
});
