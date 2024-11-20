import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

const baseProps = {
  onChange: jest.fn(),
  value: '',
  id: 'test-input-id',
  labelText: 'Test Input'
};

describe('Input', () => {
  test('it should render', () => {
    const { getByLabelText } = render(<Input {...baseProps} />);
    expect(getByLabelText('Test Input')).toBeTruthy();
  });

  test('it should call the onChange method when text is entered', () => {
    const { getByLabelText } = render(<Input {...baseProps} />);
    const inputInstance = getByLabelText('Test Input');
    fireEvent.change(inputInstance, { target: { value: 'testing 123' } });
    expect(baseProps.onChange).toHaveBeenCalledTimes(1);
  });

  test('it should show the error message', () => {
    const errorMessage = 'stop trying to hack our site';
    const testProps = { ...baseProps, error: true, errorMessage };
    const { getByText } = render(<Input {...testProps} />);
    const error = getByText(errorMessage);
    expect(error).toBeTruthy();
  });
});
