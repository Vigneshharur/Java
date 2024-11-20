import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonBar from './ButtonBar';

describe('ButtonBar', () => {
  it('renders at all', () => {
    const { container } = render(<ButtonBar buttonItems={[{ name: 'item 1' }]} />);
    expect(container).toBeTruthy();
  });

  it('clicking on a selected item gives no callback', () => {
    const clickSpy = jest.fn();
    const { getByText } = render(<ButtonBar onClick={clickSpy} buttonItems={[{ name: 'item 1', selected: true }]} />);
    fireEvent.click(getByText('item 1'));
    expect(clickSpy).toBeCalledTimes(0);
  });

  it('clicking on an unselected item gives no callback', () => {
    const clickSpy = jest.fn();
    const { getByText } = render(
      <ButtonBar
        onClick={clickSpy}
        buttonItems={[
          { name: 'item 1', selected: true },
          { name: 'item 2', selected: false }
        ]}
      />
    );
    fireEvent.click(getByText('item 2'));
    expect(clickSpy).toBeCalledTimes(1);
  });
});
