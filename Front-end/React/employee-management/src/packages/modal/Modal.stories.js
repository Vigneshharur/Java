import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../button/lib/';
import { BannerTypes } from '../banner/lib/';
import { StyleType } from '../button/lib/';
import { StandardTypography } from '../typography/lib/';

import ModalComponent from './src';

const NONE = 'NONE';
const SHOW = 'SHOW';
const PROVIDED = 'PROVIDED';

const bannerOptions = {
  [NONE]: null,
  [BannerTypes.INFORMATIONAL]: { type: BannerTypes.INFORMATIONAL, text: 'Informational banner' },
  [BannerTypes.CONFIRMATION]: { type: BannerTypes.CONFIRMATION, text: 'Confirmation banner' },
  [BannerTypes.WARNING]: { type: BannerTypes.WARNING, text: 'Warning banner' },
  [BannerTypes.PATIENT_SAFETY]: { type: BannerTypes.PATIENT_SAFETY, text: 'Patient safety banner' }
};

const buttonOptions = {
  [NONE]: undefined,
  [SHOW]: [
    <Button key="submit" onClick={action('clicked Submit button')} styleType={StyleType.PRIMARY}>
      Submit
    </Button>,
    <Button key="cancel" onClick={action('clicked Cancel button')} styleType={StyleType.TERTIARY}>
      Cancel
    </Button>
  ]
};

const secondaryButtonOptions = {
  [NONE]: undefined,
  [SHOW]: [
    <Button key="submit" onClick={action('clicked Submit button')} styleType={StyleType.TERTIARY}>
      Back
    </Button>
  ]
};

export default {
  title: 'Components/Modal',
  component: ModalComponent,
  parameters: {
    docs: {
      description: {
        component:
          "This is a generic modal that can be used for showing content. It uses PatientPing's styles except for the content."
      }
    }
  },
  argTypes: {
    id: { description: 'Add a unique id to the modal body', control: { type: 'text' }, defaultValue: '' },
    isOpen: {
      description: 'Whether to show the modal',
      control: { type: 'boolean' },
      defaultValue: true
    },
    banner: {
      description: 'Banner content',
      control: {
        type: 'select',
        options: Object.keys(bannerOptions)
      },
      defaultValue: NONE
    },
    buttons: {
      description: 'Array of button nodes or a single button node',
      control: {
        type: 'inline-radio',
        options: Object.keys(buttonOptions)
      },
      defaultValue: NONE
    },
    secondaryButtons: {
      description: 'Array of button nodes or a single button node',
      control: {
        type: 'inline-radio',
        options: Object.keys(secondaryButtonOptions)
      },
      defaultValue: NONE
    },
    headerText: {
      description: 'Modal title',
      control: { type: 'text' },
      defaultValue: 'My Modal'
    },
    children: {
      description: 'Modal content',
      defaultValue: (
        <div style={{ maxWidth: '50rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </div>
      )
    },
    hideModal: {
      description:
        'Function to call when the close icon is clicked.  Close icon is shown only when this property is defined.',
      defaultValue: NONE,
      control: {
        type: 'inline-radio',
        options: [NONE, PROVIDED]
      }
    }
  }
};

export const Modal = (args) => {
  const banner = bannerOptions[args.banner];
  const buttons = [
    <Button key="submit" onClick={action('clicked Submit button')}>
      Submit
    </Button>,

    <Button key="cancel" onClick={action('clicked Cancel button')} styleType={StyleType.TERTIARY}>
      Cancel
    </Button>
  ];
  const secondaryButtons = secondaryButtonOptions[args.secondaryButtons];
  const hideModal = args.hideModal === NONE ? undefined : action('called hide modal');
  const props = { ...args, banner, buttons, secondaryButtons, hideModal };

  return (
    <StandardTypography>
      <ModalComponent {...props}>{args.children}</ModalComponent>
    </StandardTypography>
  );
};
