import { Story, Meta } from '@storybook/react';
import { SharedComponents, SharedComponentsProps } from './shared-components';

export default {
  component: SharedComponents,
  title: 'SharedComponents',
} as Meta;

const Template: Story<SharedComponentsProps> = (args) => (
  <SharedComponents {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
