import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './button';
import { SharedComponents, SharedComponentsProps } from '../shared-components';

export default {
  component: Button,
  title: 'Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button />;

export const Primary = Template.bind({});
Primary.args = {};
