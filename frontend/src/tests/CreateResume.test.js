import React from 'react';
import { render, screen } from '@testing-library/react';
import CreateResume from '../components/CreateResume/CreateResume';

test('renders CreateResume component', () => {
  render(<CreateResume />);
  expect(screen.getByTestId('create-resume')).toBeInTheDocument();
});