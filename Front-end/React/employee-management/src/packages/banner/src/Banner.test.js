import React from 'react';
import { render } from '@testing-library/react';
import Banner, { BannerTypes } from './index';

describe('Banner', () => {
  it('renders CONFIRMATION with correct icon', () => {
    const { getByText, getByRole } = render(<Banner type={BannerTypes.CONFIRMATION}>Test confirmation</Banner>);
    const icon = getByRole('img', { hidden: true });

    expect(getByText('Test confirmation')).toBeTruthy();
    expect(icon.getAttribute('data-icon')).toBe('check-circle');
    expect(icon.getAttribute('data-prefix')).toBe('fal');
  });

  it('renders INFORMATIONAL with correct icon', () => {
    const { getByText, getByRole } = render(<Banner type={BannerTypes.INFORMATIONAL}>Test informational</Banner>);
    const icon = getByRole('img', { hidden: true });

    expect(getByText('Test informational')).toBeTruthy();
    expect(icon.getAttribute('data-icon')).toBe('info-circle');
    expect(icon.getAttribute('data-prefix')).toBe('fal');
  });

  it('renders WARNING with correct icon', () => {
    const { getByText, getByRole } = render(<Banner type={BannerTypes.WARNING}>Test warning</Banner>);
    const icon = getByRole('img', { hidden: true });

    expect(getByText('Test warning')).toBeTruthy();
    expect(icon.getAttribute('data-icon')).toBe('exclamation-triangle');
    expect(icon.getAttribute('data-prefix')).toBe('fal');
  });

  it('renders PATIENT_SAFETY with correct icon', () => {
    const { getByText, getByRole } = render(<Banner type={BannerTypes.PATIENT_SAFETY}>Test patient safety</Banner>);
    const icon = getByRole('img', { hidden: true });

    expect(getByText('Test patient safety')).toBeTruthy();
    expect(icon.getAttribute('data-icon')).toBe('exclamation-circle');
    expect(icon.getAttribute('data-prefix')).toBe('fas');
  });
});
