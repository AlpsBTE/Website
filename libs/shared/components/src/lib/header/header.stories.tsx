import { Story, Meta } from '@storybook/react';
import { Header, HeaderProps } from './header';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'Header',
  component: Header,
  decorators: [StoryRouter()],

  argTypes: {
    headerText: {
      control: 'text',
    },
    headerIcon: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  headerText: 'AlpsBTE',
  navItems: [
    { text: 'About Us', to: '/' },
    { text: 'Gallery', to: '/' },
    { text: 'Downloads', to: '/' },
    { text: 'FAQ', to: '/' },
    { text: 'Application', to: '/' },
    { text: 'Contact', to: '/' },
  ],
  headerIcon:
    'https://yt3.ggpht.com/ytc/AKedOLQ5MRqFQDZEnX4QQZZbtYh_dqp680D-an9ZIfTM=s900-c-k-c0x00ffffff-no-rj',
  forceColor: false,
};
