import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders app page title', () => {
  render(
    <Router>
      <App />
    </Router>,
  );
  const image = screen.getByRole('img', { name: 'calculator image' });
  expect(image).toBeInTheDocument();
});
