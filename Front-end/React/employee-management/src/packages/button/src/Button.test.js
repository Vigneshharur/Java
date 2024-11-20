import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { StyleType } from './index';

describe('Button', () => {
  beforeEach(() => {});

  it('renders at all', () => {
    const { container } = render(<Button styleType={StyleType.PRIMARY} />);
    expect(container).toBeTruthy();
  });

  it('you can click on it and the click will happen', () => {
    const clickSpy = jest.fn();
    const { getByText } = render(
      <Button styleType={StyleType.PRIMARY} onClick={clickSpy}>
        Test Button
      </Button>
    );
    fireEvent.click(getByText('Test Button'));
    expect(clickSpy).toHaveBeenCalled();
  });

  it('you can click on it and the click wont happen when the button is disabled', () => {
    const clickSpy = jest.fn();
    const { getByText } = render(
      <Button styleType={StyleType.PRIMARY} onClick={clickSpy} disabled={true}>
        Test Button
      </Button>
    );
    fireEvent.click(getByText('Test Button'));
    expect(clickSpy).toHaveBeenCalledTimes(0);
  });
});
