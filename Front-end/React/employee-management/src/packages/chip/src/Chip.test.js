import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Chip from './Chip';

describe('Chip', () => {
  test('renders without button when onClick is not set', () => {
    const { queryByText, queryByRole } = render(<Chip>Test</Chip>);
    expect(queryByText('Test')).toBeTruthy();
    expect(queryByRole('button')).toBeFalsy();
  });

  test('renders with an X button when onClick is set', () => {
    const clickSpy = jest.fn();
    const { queryByRole } = render(<Chip onClick={clickSpy}>Test</Chip>);

    expect(queryByRole('button')).toBeTruthy();
    fireEvent.click(queryByRole('button'));
    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  test('renders with an disabled button when onClick is set and disabled is true', () => {
    const clickSpy = jest.fn();
    const { queryByRole } = render(
      <Chip onClick={clickSpy} disabled>
        Test
      </Chip>
    );

    expect(queryByRole('button')).toBeTruthy();
    fireEvent.click(queryByRole('button'));
    expect(clickSpy).toHaveBeenCalledTimes(0);
  });

  test('renders with correct classes for solid style', () => {
    const props = { negated: false, disabled: false, outline: false };
    const { getByTestId } = render(<Chip {...props}>Test</Chip>);
    const classes = getByTestId('chip').firstChild.classList;
    expect(classes.contains('solid')).toBe(true);
    expect(classes.contains('disabled')).toBe(props.disabled);
    expect(classes.contains('outline')).toBe(props.outline);
  });
  test('renders with correct classes for outline', () => {
    const props = { negated: false, disabled: false, outline: true };
    const { getByTestId } = render(<Chip {...props}>Test</Chip>);
    const classes = getByTestId('chip').firstChild.classList;
    expect(classes.contains('disabled')).toBe(props.disabled);
    expect(classes.contains('outline')).toBe(props.outline);
  });
  test('renders with correct classes for disabled', () => {
    const props = { negated: false, disabled: true, outline: false };
    const { getByTestId } = render(<Chip {...props}>Test</Chip>);
    const classes = getByTestId('chip').firstChild.classList;
    expect(classes.contains('disabled')).toBe(props.disabled);
    expect(classes.contains('outline')).toBe(props.outline);
  });
});
