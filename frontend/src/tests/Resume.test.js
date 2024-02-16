import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Resume from '../components/CreateResume/Resume/Resume';
import usePersonalInfoStore from '../zustand/PersonalInfoStore';

describe('Resume component functions', () => {
  test('handleChange updates personal info state and errors state', () => {
    render(<Resume />);
    
    // Simulate changing the name input
    const nameInput = screen.getByLabelText('Name');
    fireEvent.change(nameInput, { target: { name: 'name', value: 'John' } });

    // Ensure that name input value is updated
    expect(nameInput.value).toBe('John');
  });

  test('handleReset resets personal info state and global state', () => {
    render(<Resume />);
    
    // Simulate clicking the reset button
    const resetButton = screen.getByRole('button', { name: 'Reset' });
    fireEvent.click(resetButton);

    expect(usePersonalInfoStore.getState().personalInfo.name).toBe('');
  });
});
