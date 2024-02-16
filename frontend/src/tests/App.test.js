import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  test('renders CreateResume component when loaded', () => {
    render(
        <App />
    );

    const specificElement = screen.getByTestId('main-resume-component');
    expect(specificElement).toBeInTheDocument();
  });
});
