import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import Pagination from './index';
import { componentStyle } from '../../test-utils/lib';
import { colors } from '../../theme';

const baseProps = {
  activePageNumber: 1,
  totalPages: 8,
  updateActivePageNumber: jest.fn(),
  inFlight: false
};

const getComponent = (props = baseProps) => <Pagination {...props} />;

describe('Pagination', () => {
  test('it should render starting at page 1 and display all 8 pages and navigation arrows', () => {
    const { queryByRole, queryByTestId, queryByText, queryByLabelText } = render(getComponent());
    expect(queryByLabelText('Go to page')).toBeFalsy();
    const currentPage = queryByText('1');
    expect(componentStyle(currentPage).borderColor).toBe(colors.purple5.toLowerCase());

    expect(queryByRole('button', { name: '2' })).toBeTruthy();
    expect(queryByRole('button', { name: '3' })).toBeTruthy();
    expect(queryByRole('button', { name: '4' })).toBeTruthy();
    expect(queryByRole('button', { name: '5' })).toBeTruthy();
    expect(queryByRole('button', { name: '6' })).toBeTruthy();
    expect(queryByRole('button', { name: '7' })).toBeTruthy();
    expect(queryByRole('button', { name: '8' })).toBeTruthy();
    expect(queryByRole('button', { name: '9' })).toBeFalsy();

    expect(queryByTestId('pagination-back-arrow')).toBeDisabled();
    expect(queryByTestId('pagination-forward-arrow')).toBeTruthy();
  });

  test('it should select the next page', () => {
    const { queryByTestId } = render(getComponent());

    fireEvent.click(queryByTestId('pagination-forward-arrow'));
    expect(baseProps.updateActivePageNumber).toHaveBeenCalledWith(2);
  });

  test('it should enable the back button when youre not on the first page', () => {
    const testProps = { ...baseProps, activePageNumber: 2 };
    const { queryByTestId, queryByText } = render(getComponent(testProps));

    const currentPage = queryByText('2');
    expect(componentStyle(currentPage).borderColor).toBe(colors.purple5.toLowerCase());

    fireEvent.click(queryByTestId('pagination-back-arrow'));
    expect(baseProps.updateActivePageNumber).toHaveBeenCalledWith(1);
  });

  test('it should disable the forward button when youre on the last page', () => {
    const testProps = { ...baseProps, activePageNumber: 8 };
    const { queryByTestId } = render(getComponent(testProps));

    expect(queryByTestId('pagination-forward-arrow')).toBeDisabled();
  });

  test('it should not return anything if there are no pages', () => {
    const testProps = { ...baseProps, totalPages: 0 };
    const { queryByTestId } = render(getComponent(testProps));

    expect(queryByTestId('pagination-control')).toBeFalsy();
  });

  test('it should render the first beginning sequence and last page', () => {
    const testProps = { ...baseProps, totalPages: 20 };
    const { queryByTestId, queryByRole, queryByText } = render(getComponent(testProps));
    const currentPage = queryByText('1');
    expect(componentStyle(currentPage).borderColor).toBe(colors.purple5.toLowerCase());
    expect(queryByRole('button', { name: '2' })).toBeTruthy();
    expect(queryByRole('button', { name: '3' })).toBeTruthy();
    expect(queryByRole('button', { name: '4' })).toBeTruthy();
    expect(queryByRole('button', { name: '5' })).toBeTruthy();
    expect(queryByRole('button', { name: '6' })).toBeTruthy();
    expect(queryByRole('button', { name: '7' })).toBeFalsy();
    expect(queryByTestId('icon-ellipsis-h')).toBeTruthy();
    expect(queryByRole('button', { name: '20' })).toBeTruthy();
  });

  test('it should render the middle section starting at page 7', () => {
    const testProps = { ...baseProps, totalPages: 20, activePageNumber: 7 };
    const { queryAllByTestId, queryByRole, queryByText } = render(getComponent(testProps));
    const currentPage = queryByText('7');
    expect(componentStyle(currentPage).borderColor).toBe(colors.purple5.toLowerCase());
    expect(queryByRole('button', { name: '1' })).toBeTruthy();
    expect(queryByRole('button', { name: '4' })).toBeFalsy();
    expect(queryByRole('button', { name: '5' })).toBeTruthy();
    expect(queryByRole('button', { name: '6' })).toBeTruthy();
    expect(queryByRole('button', { name: '8' })).toBeTruthy();
    expect(queryByRole('button', { name: '20' })).toBeTruthy();
    expect(queryAllByTestId('icon-ellipsis-h').length).toBe(2);
  });

  test('it should render the end section', () => {
    const testProps = { ...baseProps, totalPages: 20, activePageNumber: 18 };
    const { queryAllByTestId, queryByRole, queryByText } = render(getComponent(testProps));
    const currentPage = queryByText('18');
    expect(componentStyle(currentPage).borderColor).toBe(colors.purple5.toLowerCase());
    expect(queryByRole('button', { name: '1' })).toBeTruthy();
    expect(queryByRole('button', { name: '14' })).toBeFalsy();
    expect(queryByRole('button', { name: '15' })).toBeTruthy();
    expect(queryByRole('button', { name: '16' })).toBeTruthy();
    expect(queryByRole('button', { name: '17' })).toBeTruthy();
    expect(queryByRole('button', { name: '19' })).toBeTruthy();
    expect(queryByRole('button', { name: '20' })).toBeTruthy();
    expect(queryAllByTestId('icon-ellipsis-h').length).toBe(1);
  });

  test('it should update with the input box', async () => {
    const testProps = { ...baseProps, totalPages: 20, activePageNumber: 18 };
    const { queryByLabelText } = render(getComponent(testProps));
    const input = queryByLabelText('Go to page');
    fireEvent.keyDown(input, { target: { value: '3' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 13, charCode: 13 });
    await waitFor(() => {
      expect(baseProps.updateActivePageNumber).toHaveBeenCalledWith(3);
    });
  });

  test('it should not update with the input box when inflight', async () => {
    const testProps = { ...baseProps, totalPages: 20, activePageNumber: 18, inFlight: true };
    const { queryByLabelText } = render(getComponent(testProps));
    const input = queryByLabelText('Go to page');
    fireEvent.keyDown(input, { target: { value: '3' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 13, charCode: 13 });
    await waitFor(() => {
      expect(baseProps.updateActivePageNumber).toHaveBeenCalled();
    });
  });
});
