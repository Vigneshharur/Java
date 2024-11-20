import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Tabs from './Tabs';
import Tab from './Tab';

const renderTabs = ({ value = 0, firstDisabled = false, allDisabled = false, secondValue = null } = {}) => {
  const onChange = jest.fn();
  return {
    onChange,
    ...render(
      <Tabs value={value} onChange={onChange} disabled={allDisabled}>
        <Tab disabled={firstDisabled}>First</Tab>
        <Tab value={secondValue}>Second</Tab>
      </Tabs>
    )
  };
};

describe('<Tabs />', () => {
  it('renders all the tabs', () => {
    const { queryByText } = renderTabs();
    expect(queryByText('First')).toBeInTheDocument();
    expect(queryByText('Second')).toBeInTheDocument();
  });

  it('calls onChange', () => {
    const { queryByText, onChange } = renderTabs();
    fireEvent.click(queryByText('Second'));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toBeCalledWith(1);
  });

  it('calls onChange with custom value', () => {
    const customValue = 90;
    const { queryByText, onChange } = renderTabs({ secondValue: customValue });
    fireEvent.click(queryByText('Second'));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toBeCalledWith(customValue);
  });

  it('first should be disabled', () => {
    const { queryByText } = renderTabs({ firstDisabled: true });
    expect(queryByText('First')).toBeDisabled();
    expect(queryByText('Second')).not.toBeDisabled();
  });

  it('all should be disabled', () => {
    const { queryByText } = renderTabs({ allDisabled: true });
    expect(queryByText('First')).toBeDisabled();
    expect(queryByText('Second')).toBeDisabled();
  });
});
