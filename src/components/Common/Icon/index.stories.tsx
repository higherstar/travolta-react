// Dependencies
import React from 'react';
import { iconList } from 'icomoon-react';

// Icon set
import iconSet from '../../../assets/icomoon/selection.json';

// Components
import { Icon, IIconProps } from './index';

// Add Icon to storybook
export default {
  title: 'Icon',
  component: Icon,
};

// Default
export const Default = (args: IIconProps) => <Icon {...args} />;
