import React, { Fragment } from 'react';
import BadgeComponent, { badgeTypes } from './src';
import { colors, sizes } from '../theme';
import styled from '@emotion/styled';

const GroupContainer = styled('div')`
  margin: ${sizes.small};
  & > span {
    margin: ${sizes.small};
  }
`;

const badgeTypeOptions = Object.keys(badgeTypes).map((type) => badgeTypes[type]);

export default {
  title: 'Components/Badge',
  component: BadgeComponent,
  parameters: {
    docs: {
      description: {
        component: `This is the generic badge component based on the styleguide. The intention of this component 
                  is for convenience and to standardize the colors with ability to customize background and font colors.
                  Visual examples are available here: 
                  https://zpl.io/aME35PN`
      }
    }
  },
  argTypes: {
    textColor: {
      description: 'if not using a preset type, you can customize the text color.',
      defaultValue: colors.green5
    },
    backgroundColor: {
      description: 'if not using a preset type, you can customize the background color.',
      defaultValue: colors.green1
    },
    type: {
      description: 'Preset color combos',
      control: { type: 'inline-radio', options: badgeTypeOptions }
    }
  }
};
export const Badge = (args) => (
  <Fragment>
    <GroupContainer>
      Default:
      <BadgeComponent>Default</BadgeComponent>
    </GroupContainer>
    <GroupContainer>
      Type presets:
      <BadgeComponent type={badgeTypes.WARNING}>ER</BadgeComponent>
      <BadgeComponent type={badgeTypes.EVENT}>Inpatient</BadgeComponent>
      <BadgeComponent type={badgeTypes.STATUS}>Anchor Stay</BadgeComponent>
      <BadgeComponent type={badgeTypes.FEATURE}>Beta</BadgeComponent>
    </GroupContainer>
    <GroupContainer>
      Customizable:
      <BadgeComponent {...args}>Custom</BadgeComponent>
    </GroupContainer>
  </Fragment>
);
