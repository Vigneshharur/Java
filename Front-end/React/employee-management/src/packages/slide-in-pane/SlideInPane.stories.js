import React, { useState, Fragment } from 'react';

import SlideInPane from './src';
import Banner, { BannerTypes } from '../banner/lib/';
import Button, { StyleType } from '../button/lib/';

export default {
  title: 'Components/SlideInPane',
  component: SlideInPane,
  parameters: {
    docs: {
      description: {
        component: `This is the generic SlideInPane component.`
      }
    }
  },
  argTypes: {
    isOpen: {
      description: 'Indicates whether pane is currently open. Optional, default false'
    },
    headerText: {
      description: 'Text at top of pane. Optional'
    },
    buttons: {
      description: 'Buttons to appear in pane. Optional'
    },
    badge: {
      description: 'Text for warning badge. Optional'
    },
    children: {
      description: 'Elements to display in center of pane.'
    },
    headerChildren: {
      description: 'Additional elements to display in header. Optional'
    },
    isOverlayOpen: {
      description: 'Whether the overlay should cover the area outside the pane'
    },
    onOpen: {
      description: 'Function to call when pane is opened. Optional'
    },
    onClose: {
      description: 'Function to call when pane is closed'
    },
    onScroll: {
      description: 'Function to call on scroll. Optional'
    },
    showNav: {
      description: 'Whether the top of the pane is below the navigation bar. Optional, default true'
    }
  }
};

const onOpen = () => {};
const onScroll = () => {};

const banner = { type: BannerTypes.WARNING, text: 'Example Banner Content' };

const badge = { text: 'Badge text', inline: false };

const inlineBadge = { text: 'Badge text', inline: true };

const content = <div>Example Child Content</div>;

const header = <div>Header Child</div>;

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttons = [
    <Button key="submit" onClick={() => setIsOpen(false)} styleType={StyleType.PRIMARY}>
      Submit
    </Button>,
    <Button key="cancel" onClick={() => setIsOpen(false)} styleType={StyleType.TERTIARY}>
      Cancel
    </Button>
  ];
  return (
    <Fragment>
      <SlideInPane
        buttons={buttons}
        isOpen={isOpen}
        isOverlayOpen={isOpen}
        onClose={() => setIsOpen(false)}
        {...args}></SlideInPane>
      <Button onClick={() => setIsOpen(true)}>Open Slide in</Button>
    </Fragment>
  );
};

export const PaneWithBadge = Template.bind({});

PaneWithBadge.args = {
  headerText: 'Header',
  banner: banner,
  badge: badge,
  children: content,
  headerChildren: header,
  onOpen: onOpen,
  onScroll: onScroll
};

export const PaneWithInlineBadge = Template.bind({});

PaneWithInlineBadge.args = {
  headerText: 'Header',
  banner: banner,
  badge: inlineBadge,
  children: content,
  onOpen: onOpen,
  onScroll: onScroll
};
