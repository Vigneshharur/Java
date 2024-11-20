import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { BannerTypes } from '../../banner/lib/';
import Modal from './Modal';
import Button, { StyleType } from '../../button/lib/';

const hideModalSpy = jest.fn();

describe('Modal', () => {
  beforeEach(() => {
    hideModalSpy.mockReset();
  });
  test('renders modal with correct body content when isOpen is true', () => {
    const bodyText = 'Body content';
    const { queryByText } = render(
      <Modal headerText="Test" hideModal={hideModalSpy} isOpen={true}>
        {bodyText}
      </Modal>
    );
    expect(queryByText(new RegExp(bodyText))).toBeTruthy();
  });

  test('hides modal when isOpen is false', () => {
    const bodyText = 'Body content';
    const { queryByText } = render(
      <Modal headerText="Test" hideModal={hideModalSpy} isOpen={false}>
        {bodyText}
      </Modal>
    );
    expect(queryByText(new RegExp(bodyText))).toBeFalsy();
  });

  test('renders header text', () => {
    const headerText = 'Header content';
    const { queryByText } = render(
      <Modal hideModal={hideModalSpy} isOpen={true} headerText={headerText}>
        Body content
      </Modal>
    );
    expect(queryByText(new RegExp(headerText))).toBeTruthy();
  });

  test('calls hideModal when modal close button is clicked', () => {
    const { getByTestId } = render(
      <Modal headerText="Test" hideModal={hideModalSpy} isOpen={true}>
        Body content
      </Modal>
    );
    fireEvent.click(getByTestId('close-modal-button'));
    expect(hideModalSpy).toHaveBeenCalledTimes(1);
  });

  test('calls hideModal when modal overlay is clicked', () => {
    const { getByTestId } = render(
      <Modal headerText="Test" hideModal={hideModalSpy} isOpen={true}>
        Body content
      </Modal>
    );
    fireEvent.click(getByTestId('modal-overlay'));
    expect(hideModalSpy).toHaveBeenCalledTimes(1);
  });

  test('does not call hideModal when prop is set and modal body is clicked', () => {
    const { getByTestId } = render(
      <Modal headerText="Test" hideModal={hideModalSpy} isOpen={true}>
        Body content
      </Modal>
    );
    fireEvent.click(getByTestId('modal-container'));
    expect(hideModalSpy).toHaveBeenCalledTimes(0);
  });

  test('renders close icon if hideModal is set', () => {
    const { queryByTestId } = render(
      <Modal headerText="Test" hideModal={hideModalSpy} isOpen={true}>
        Body content
      </Modal>
    );
    expect(queryByTestId('close-modal-button')).toBeTruthy();
  });

  test('does not render close icon if hideModal is not set', () => {
    const { queryByTestId } = render(
      <Modal headerText="Test" isOpen={true}>
        Body content
      </Modal>
    );
    expect(queryByTestId('close-modal-button')).toBeFalsy();
  });

  test('renders modal without banner if prop is not set', () => {
    const { queryByTestId } = render(
      <Modal headerText="Test" hideModal={hideModalSpy} isOpen={true}>
        Body content
      </Modal>
    );
    expect(queryByTestId('banner')).toBeFalsy();
  });

  test('renders modal with banner if prop is set', () => {
    const bannerText = 'Banner text';
    const { getByText } = render(
      <Modal
        headerText="Test"
        hideModal={hideModalSpy}
        isOpen={true}
        banner={{ type: BannerTypes.WARNING, text: bannerText }}>
        Body content
      </Modal>
    );
    expect(getByText(bannerText)).toBeTruthy();
  });

  test('renders buttons if buttons prop is set', () => {
    const { findByText } = render(
      <Modal
        headerText="Test"
        hideModal={hideModalSpy}
        isOpen={true}
        buttons={[
          <Button key="my-button" styleType={StyleType.PRIMARY} onClick={() => null}>
            My Button
          </Button>
        ]}>
        Body content
      </Modal>
    );
    expect(findByText('My Button')).toBeTruthy();
  });
  test('renders secondaryButtons if  prop is set', () => {
    const { findByText } = render(
      <Modal
        headerText="Test"
        hideModal={hideModalSpy}
        isOpen={true}
        buttons={[
          <Button key="my-button" styleType={StyleType.PRIMARY} onClick={() => null}>
            My Button
          </Button>
        ]}
        secondaryButtons={[
          <Button key="my-button" styleType={StyleType.TERTIARY} onClick={() => null}>
            SecondaryButtonGroup
          </Button>
        ]}>
        Body content
      </Modal>
    );
    expect(findByText('My Button')).toBeTruthy();
    expect(findByText('SecondaryButtonGroup')).toBeTruthy();
  });
});
