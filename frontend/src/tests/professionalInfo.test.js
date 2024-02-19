import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProfessionalInfo from '../components/CreateResume/Resume/ProfessionalInformation/ProfessionalInfo';

describe('ProfessionalInfo component', () => {
  test('renders ProfessionalInfo component', () => {
    render(<ProfessionalInfo />);
    // Check if the component renders without crashing
    const titleElement = screen.getByText(/Professional Information/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('changes in input fields', () => {
    render(<ProfessionalInfo />);
    
    const degreeInput = screen.getByLabelText(/Degree/i);
    fireEvent.change(degreeInput, { target: { value: 'Bachelor' } });
    expect(degreeInput.value).toBe('Bachelor');

    // You can add similar tests for other input fields
  });
  
  test('form submission', () => {
    render(<ProfessionalInfo />);
    
    // Trigger form submission
    const submitButton = screen.getByText(/Submit/i);
    fireEvent.click(submitButton);

    // Add assertions based on the expected behavior of your handleSubmit function
  });

  test('form reset', () => {
    render(<ProfessionalInfo />);
    
    const degreeInput = screen.getByLabelText(/Degree/i);
    fireEvent.change(degreeInput, { target: { value: 'Bachelor' } });

    // Trigger form reset
    const resetButton = screen.getByText(/Reset/i);
    fireEvent.click(resetButton);

    // Add assertions based on the expected behavior of your handleReset function
    expect(degreeInput.value).toBe('');
    // Add similar assertions for other input fields
  });
});
