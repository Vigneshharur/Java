import React from 'react';
import Banner, { BannerTypes } from './src';

export default {
  title: 'Components/Banner',
  component: Banner,
  parameters: {
    docs: {
      description:{
        component: `This is the generic Banner component based on the styleguide. The intention of this component 
                  is for convenience and to standardize the colors
                  and icons used for different types of banner displays.
                  Visual examples are available here: 
                  https://app.zeplin.io/project/5e973111cb2b6e7c55dc5454/screen/5cd598e299634b67d2ce78fc`
      }
    }
  },
  argTypes: {
    type: {
      description: 'Type of banner, each has a different color an icon',
      defaultValue: BannerTypes.CONFIRMATION
    }
  }
};

const Template = (args) => <Banner {...args}>Important user feedback</Banner>;

/**
 * Only use me once per page for the preferred user action.
 */
export const Confirmation = Template.bind({});

export const Warning = Template.bind({});
Warning.args = { type: BannerTypes.WARNING };

export const Informational = Template.bind({});
Informational.args = { type: BannerTypes.INFORMATIONAL };
