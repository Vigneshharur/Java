import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import ContextMenu from './ContextMenu';

const baseProps = { onShow: jest.fn(), onHide: jest.fn(), menuItems: [{ label: 'click for more', action: jest.fn() }] };

const getComponent = (props = baseProps) => <ContextMenu {...props}>get more information</ContextMenu>;

describe('ContextMenu', () => {
  test('it should render a context menu and allow the user to select an option', async () => {
    const { queryByText } = render(getComponent());
    fireEvent.click(queryByText(/get more information/i));
    await waitFor(() => {
      expect(baseProps.onShow).toHaveBeenCalled();
      const contextMenuItem = queryByText(/click for more/i);
      expect(contextMenuItem).toBeTruthy();
      fireEvent.click(contextMenuItem);
      expect(baseProps.menuItems[0].action).toHaveBeenCalled();
      expect(baseProps.onHide).toHaveBeenCalled();
    });
  });
});
