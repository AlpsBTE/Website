import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './button';

export default {
  title: 'Button',
  component: Button,
  //👇 Creates specific argTypes
  argTypes: {
    label: { control: 'text' },
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  size: 'md',
  disabled: false,
  onClick: () => {
    return;
  },
  color: '#ffffff',
};
