import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import selectEvent from 'react-select-event';
import DropdownMultiGroupSelect from './DropdownMultiGroupSelect';
import { componentStyle, hexToRGB } from '../../test-utils/lib';
import { colors } from '../../theme/lib/';

const buildOptions = (numberOfGroups = 15, numberOfOptionsInGroup = 10) => {
  return new Array(numberOfGroups).fill('').map((group, index) => {
    const options = new Array(numberOfOptionsInGroup).fill('').map((hospital, hosIndex) => {
      return {
        id: `option${index}${hosIndex}`,
        name: `option${index}${hosIndex}`,
        label: `option${index}${hosIndex}`,
        group: `mock hospital${index}`
      };
    });
    return {
      label: `mock hospital${index}`,
      options
    };
  });
};

const baseProps = {
  options: buildOptions(),
  value: [],
  label: 'Select Option',
  handleChange: jest.fn(),
  id: 'ppingMultiGroupSelect'
};

const getComponent = (props = baseProps) => <DropdownMultiGroupSelect {...props} />;

describe('DropdownMultiGroupSelect', () => {
  test('it should handle selecting a group', () => {
    const { queryByText, container } = render(getComponent());
    const fromContainer = container.querySelector('#dropdown-ppingMultiGroupSelect');
    const fromSelect = fromContainer.querySelector('input');
    expect(fromSelect).toBeTruthy();
    expect(queryByText(/select option/i)).toBeTruthy();
    selectEvent.openMenu(fromSelect);
    fireEvent.click(queryByText(/mock hospital0/i));
    expect(baseProps.handleChange).toHaveBeenCalledWith(baseProps.options[0].options);
  });

  test('it should clear the selection', () => {
    const testProps = { ...baseProps, value: [baseProps.options[0].options[0]] };
    const { queryByTestId } = render(getComponent(testProps));
    fireEvent.click(queryByTestId('icon-times'));
    expect(baseProps.handleChange).toHaveBeenCalledWith([]);
  });
  test('it should show the all selected chip when all are selected', () => {
    const options = buildOptions(1, 1);
    const testProps = { ...baseProps, options, value: [options[0].options] };
    const { queryByTestId, queryByText } = render(getComponent(testProps));
    expect(queryByText(/all selected/i)).toBeTruthy();
    selectEvent.openMenu(queryByTestId('icon-angle-down'));
    const selectAllCheckBox = queryByTestId('dropdownOption-Select All');
    expect(componentStyle(selectAllCheckBox).backgroundColor).toBe(hexToRGB(colors.green4));
  });
  test('it should select all options when you select the all groups option', () => {
    const { queryByTestId, queryByText } = render(getComponent());
    selectEvent.openMenu(queryByTestId('icon-angle-down'));
    fireEvent.click(queryByText(/select all/i));
    expect(baseProps.handleChange).toHaveBeenCalled();
    expect(baseProps.handleChange.mock.calls[baseProps.handleChange.mock.calls.length - 1][0]).toHaveLength(150);
  });
  test('it should filter options by group name and remove filtering on selection', () => {
    const { queryByText, queryByRole, queryAllByText } = render(getComponent());
    const input = queryByRole('textbox');
    fireEvent.change(input, { target: { value: 'mock hospital0' } });
    expect(queryByText(/option1/i)).toBeFalsy();
    const options = queryAllByText(/option0/i);
    expect(options.length).toBe(10);
    fireEvent.click(options[0]);
    expect(queryAllByText(/option1/i)).toBeTruthy();
  });
  test('it should filter by option name', () => {
    const { queryByText, queryByRole, queryAllByText } = render(getComponent());
    const input = queryByRole('textbox');
    fireEvent.change(input, { target: { value: 'option00' } });
    expect(queryAllByText(/option00/i)).toBeTruthy();
    expect(queryByText(/option01/i)).toBeFalsy();
  });
});
