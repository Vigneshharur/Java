import React from 'react';
import Toast, { ToastNotification, ToastType } from './src';

export default {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    docs: {
      description:{
        component: `This is the generic Toast component based on the styleguide. The intention of this component
                  is for convenience and to standardize the colors
                  and icons used for different types of toast displays.
                  Visual examples are available here:
                  https://app.zeplin.io/project/5e973111cb2b6e7c55dc5454/screen/5cd599c81ae7fe3478c86645`
      }
    }
  },
  argTypes: {
    toasts: {
      description: 'List of notifications'
    },
    remove: {
      description: 'function to perform after removal'
    }
  }
};

const Template = (args) => <Toast {...args}></Toast>;

const remove = (): int => null;

export const Success = Template.bind({});
Success.args = { toasts: [{ type: ToastType.SUCCESS, content: 'Sample success' }], remove: remove };

export const Warning = Template.bind({});
Warning.args = { toasts: [{ type: ToastType.WARNING, content: 'Sample warning' }], remove: remove };

export const Info = Template.bind({});
Info.args = { toasts: [{ type: ToastType.INFO, content: 'Sample info' }], remove: remove };

export const ErrorAndPatientSafety = Template.bind({});
ErrorAndPatientSafety.args = { toasts: [{ type: ToastType.ERROR, content: 'Sample error' }, { type: ToastType.PATIENT_SAFETY, content: 'Sample patient safety' }], remove: remove };

export const Custom = Template.bind({});
Custom.args = { toasts: [{type: ToastType.CUSTOM, content: 'Sample custom', background: 'purple', contentColor: 'white', iconColor: 'yellow', iconClass: 'angle-down' }], remove: remove };

