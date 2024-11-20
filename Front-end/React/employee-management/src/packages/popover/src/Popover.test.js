import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Popover from './Popover';

const content = <div>Test component</div>;

const baseProps = { onShow: jest.fn(), onHide: jest.fn(), isOpen: false, toggle: jest.fn(), content };

const getComponent = (props = baseProps) => <Popover {...props}>click here</Popover>;

describe('Popover', () => {
  test('it should not add key listener when the popover is closed', () => {
    const { container } = render(getComponent());
    fireEvent.keyDown(container, {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27
    });
    expect(baseProps.toggle).not.toHaveBeenCalled();
  });

  test('it should render a popover component closed', () => {
    const { queryByText } = render(getComponent());
    expect(queryByText(/Test component/i)).not.toBeInTheDocument();
    fireEvent.click(queryByText(/click here/i));
    expect(baseProps.toggle).toHaveBeenCalledWith(true);
  });

  test('it should render a popover component open', async () => {
    const testProps = { ...baseProps, isOpen: true };
    const { queryByText, container } = render(getComponent(testProps));
    expect(queryByText(/Test component/i)).toBeInTheDocument();
    fireEvent.click(queryByText(/click here/i));

    expect(baseProps.toggle).toHaveBeenCalledWith(false);

    await waitFor(() => {
      expect(baseProps.onShow).toHaveBeenCalled();
    });

    fireEvent.keyDown(container, {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27
    });

    expect(baseProps.toggle).toHaveBeenCalledWith(false);
  });
});
