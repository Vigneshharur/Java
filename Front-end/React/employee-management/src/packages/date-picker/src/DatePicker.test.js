import React from 'react';
import { render, fireEvent, waitFor, queryByPlaceholderText, queryByLabelText } from '@testing-library/react';
import DatePicker from './DatePicker';
import { componentStyle, hexToRGB } from '../../test-utils/lib';
import { colors } from '../../theme';

const baseProps = { value: null, onChange: jest.fn(), labelText: 'select a date' };

const getComponent = (props = baseProps) => <DatePicker {...props} />;

const displayNumber = (number) => {
  return number < 10 ? `0${number}` : number;
};
const date = new Date();
const month = date.getMonth();
const day = date.getDate();
const year = date.getFullYear();

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

describe('DatePicker', () => {
  test('it should render a placeholder, angle-down icon, label and calendar icon', () => {
    const { queryByTestId, queryByPlaceholderText, queryByLabelText } = render(getComponent());
    expect(queryByTestId('icon-angle-down')).toBeTruthy();
    expect(queryByTestId('icon-calendar-day')).toBeTruthy();
    expect(queryByPlaceholderText(/mm\/dd\/yyyy/i)).toBeTruthy();
    expect(queryByLabelText(/select a date/i)).toBeTruthy();
  });
  test('it should open the calendar when you click the calendar icon', async () => {
    const { queryByTestId, queryByText } = render(getComponent());
    fireEvent.click(queryByTestId('icon-calendar-day'));
    await waitFor(() => {
      expect(queryByText(year)).toBeTruthy();
      expect(queryByText(months[month])).toBeTruthy();
      expect(document.querySelector('.react-datepicker-popper')).toBeTruthy();
    });
  });
  test('it should not open the calendar when the picker is disabled', async () => {
    const testProps = { ...baseProps, disabled: true };
    const { queryByTestId, queryByText } = render(getComponent(testProps));
    fireEvent.click(queryByTestId('icon-calendar-day'));
    await waitFor(() => {
      expect(queryByText(year)).toBeFalsy();
      expect(queryByText(months[month])).toBeFalsy();
      expect(document.querySelector('.react-datepicker-popper')).toBeFalsy();
    });
  });
  test('it should display an error', () => {
    const testProps = { ...baseProps, externalError: true, externalErrorText: 'required field' };
    const { queryByTestId, queryByText, queryByLabelText } = render(getComponent(testProps));
    expect(queryByTestId('icon-exclamation-triangle')).toBeTruthy();
    expect(queryByText(/required field/i)).toBeTruthy();
    const input = queryByLabelText(/select a date/i);
    const inputStyle = componentStyle(input);
    expect(inputStyle.backgroundColor).toEqual(hexToRGB(colors.yellow1));
  });
  test('it should render a starting value when provided', () => {
    const testProps = { ...baseProps, value: date };
    const { queryByLabelText } = render(getComponent(testProps));
    const input = queryByLabelText('select a date');
    expect(input.value).toEqual(`${displayNumber(month + 1)}/${displayNumber(day)}/${year}`);
  });
  test('it should call onChange when you select a date', async () => {
    const { queryByText, queryByPlaceholderText } = render(getComponent());
    fireEvent.click(queryByPlaceholderText(/mm\/dd\/yyyy/i));
    await waitFor(() => {
      fireEvent.click(queryByText('10'));
      expect(baseProps.onChange).toHaveBeenCalled();
    });
  });
  test('it should allow typing a date without / ', async () => {
    const { queryByPlaceholderText } = render(getComponent());
    fireEvent.change(queryByPlaceholderText(/mm\/dd\/yyyy/i), { target: { value: '01022022' } });
    await waitFor(() => {
      expect(baseProps.onChange).toHaveBeenCalledWith(new Date('01/02/2022'), expect.anything()); //2nd argument is the full event
    });
  });
  test('it should show the times icon when there is a value', () => {
    const { queryByTestId } = render(getComponent({ ...baseProps, value: new Date() }));
    expect(queryByTestId('icon-times')).toBeTruthy();
  });
});

describe('timePicker', () => {
  const timePickerProps = { ...baseProps, timePickerOnly: true, labelText: 'select a time' };
  test('it should render a placeholder, angledown icon, label and clock icon', () => {
    const { queryByTestId, queryByPlaceholderText, queryByLabelText } = render(getComponent(timePickerProps));
    expect(queryByTestId('icon-angle-down')).toBeTruthy();
    expect(queryByTestId('icon-clock')).toBeTruthy();
    expect(queryByPlaceholderText(/hh:mm aa/i)).toBeTruthy();
    expect(queryByLabelText(/select a time/i)).toBeTruthy();
  });
  test('it should open the timePicker when you click the time icon', async () => {
    const { queryByTestId, queryByText } = render(getComponent(timePickerProps));
    fireEvent.click(queryByTestId('icon-clock'));
    await waitFor(() => {
      fireEvent.click(queryByText(/10\:00 am/i));
      expect(baseProps.onChange).toHaveBeenCalled();
    });
  });
  test('it should not open the timepicker when the picker is disabled', async () => {
    const testProps = { ...timePickerProps, disabled: true };
    const { queryByTestId, queryByText } = render(getComponent(testProps));
    fireEvent.click(queryByTestId('icon-clock'));
    await waitFor(() => {
      expect(queryByText(/10\:00 am/i)).toBeFalsy();
    });
  });
  test('it should display an error', () => {
    const testProps = { ...timePickerProps, externalError: true, externalErrorText: 'required field' };
    const { queryByTestId, queryByText, queryByLabelText } = render(getComponent(testProps));
    expect(queryByTestId('icon-exclamation-triangle')).toBeTruthy();
    expect(queryByText(/required field/i)).toBeTruthy();
    const input = queryByLabelText(/select a time/i);
    const inputStyle = componentStyle(input);
    expect(inputStyle.backgroundColor).toEqual(hexToRGB(colors.yellow1));
  });
});
