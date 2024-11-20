import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RadioButton from './index';

describe('Button', () => {
  beforeEach(() => {});
  const label = 'Option';

  it('renders at all', () => {
    const { container } = render(<RadioButton label={label} />);
    expect(container).toBeTruthy();
  });

  it('you can click on it and the click will happen', () => {
    const changeSpy = jest.fn();
    const { getByText } = render(<RadioButton label={label} onChange={changeSpy} />);
    fireEvent.click(getByText(label));
    expect(changeSpy).toHaveBeenCalled();
  });
});
