import React from 'react';
import { StandardTypography } from '../typography/lib/';
import Icon from '../icon/lib/';

import ContextMenuComponent from './src';

const menuItems = [
  { label: 'Review details', action: () => console.log('clicked') },
  { label: 'Cancel last action', action: () => console.log('clicked') },
  { label: 'Go back', action: () => console.log('clicked') },
  { label: 'Export details', action: () => console.log('clicked') }
];

export default {
  title: 'Components/Context Menu',
  component: ContextMenuComponent
};
const Template = (args) => (
  <StandardTypography>
    <ContextMenuComponent {...args}>
      Edit this item <Icon iconClass="pencil" />
    </ContextMenuComponent>
  </StandardTypography>
);

export const ContextMenu = Template.bind({});
ContextMenu.args = {
  menuItems,
  position: 'bottom',
  menuTestId: 'patient-context-menu',
  triggerTestId: 'call-to-action',
  onShow: () => console.log('do something'),
  onHide: () => console.log('menu closed')
};
