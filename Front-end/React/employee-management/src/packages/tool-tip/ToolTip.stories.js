import React from 'react';
import { StandardTypography } from '../typography/lib/index';
import Icon from '../icon/lib/index';

import ToolTipComponent from './src';

export default {
  title: 'Components/Tooltip',
  component: ToolTipComponent,
  parameters: {
    docs: {
      description: {
        component: 'This is a minimized interface for the [react-tippy](https://github.com/tvkhoa/react-tippy) which has been customized to match our Styles.'
      }
    }
  }
};

const toolTipHTML = <span>Here are details about your HL7 Program</span>;

export const Tooltip= () => {
  return (<StandardTypography>
    This patient belongs to the StoryBook HL7 Program
    <ToolTipComponent html={toolTipHTML}>
      <Icon iconClass="question-circle"/>
    </ToolTipComponent>
  </StandardTypography>);

};
