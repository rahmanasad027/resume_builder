import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PersonalInfo from "../components/CreateResume/Resume/PersonalInformation/PersonalInfo";

describe('PersonalInfo component', () => {
  test('renders PersonalInfo component', () => {
    render(<PersonalInfo />);
    // Check if the component renders without crashing
    const titleElement = screen.getByText(/Personal Information/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('changes in input fields', () => {
    render(<PersonalInfo />);
    
    const nameInput = screen.getByLabelText(/Name/i);
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');

    // You can add similar tests for other input fields
  });

  test('form submission', () => {
    render(<PersonalInfo />);
    
    const nameInput = screen.getByLabelText(/Name/i);
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    // Trigger form submission
    const submitButton = screen.getByText(/Submit/i);
    fireEvent.click(submitButton);

    // Add assertions based on the expected behavior of your handleSubmit function
  });

  test('form reset', () => {
    render(<PersonalInfo />);
    
    const nameInput = screen.getByLabelText(/Name/i);
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    // Trigger form reset
    const resetButton = screen.getByText(/Reset/i);
    fireEvent.click(resetButton);

    // Add assertions based on the expected behavior of your handleReset function
    expect(nameInput.value).toBe('');
    // Add similar assertions for other input fields
  });
});
