import { render, screen } from '@testing-library/react';
import {
  PrimaryButton,
  ButtonExpenses,
  ButtonIncome,
  IconButton,
} from './Button';

describe('button', () => {
  test('if renders properly in the document', () => {
    render(<PrimaryButton text="button" className="class" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});

describe('button', () => {
  test('if renders properly in the document', () => {
    render(<ButtonExpenses text="Wydatek" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});

describe('button', () => {
  test('if renders properly in the document', () => {
    render(<ButtonIncome text="Przychody" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});

describe('button', () => {
  test('if renders properly in the document', () => {
    render(<IconButton />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
