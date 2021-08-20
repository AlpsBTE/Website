import { Story, Meta } from '@storybook/react';
import { Header, HeaderProps } from './header';

export default {
  title: 'Header',
  component: Header,

  argTypes: {},
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  headerText: 'AlpsBTE',
  navItems: [
    { text: 'Text 1', to: '/' },
    { text: 'Text 1', to: '/' },
    { text: 'Text 1', to: '/' },
    { text: 'Text 1', to: '/' },
    { text: 'Text 1', to: '/' },
    { text: 'Text 1', to: '/' },
  ],
};
