import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import TabsComponent, { Tab } from './src';

export default {
  title: 'Components/Tabs',
  component: TabsComponent,
  parameters: {
    docs: {
      description: {
        component: 'Tabs organize and allow switching between groups of content that are related and at the same level of hierarchy.'
      }
    }
  }
};

export const Tabs = () => {
  const [currentTab, setCurrentTab] = React.useState(0);
  const firstTabLabel = text('First tab label', 'TAB 1');
  const secondTabLabel = text('Second tab label', 'TAB 2');
  const thirdTabLabel = text('Third tab label', 'TAB 3');
  return (
    <TabsComponent value={currentTab} onChange={setCurrentTab} disabled={boolean('Disable ALL', false)}>
      <Tab>{firstTabLabel}</Tab>
      <Tab>{secondTabLabel}</Tab>
      <Tab disabled={boolean(`Disable "${thirdTabLabel}" tab`, false)}>{thirdTabLabel}</Tab>
    </TabsComponent>
  );
};
