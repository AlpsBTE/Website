import { Story, Meta } from '@storybook/react';
import { Header, HeaderProps } from './Header';

export default {
    title: 'Button2',
    component: Header,
    //👇 Creates specific argTypes
    argTypes: {
        label: { control: 'text' },
    },
} as Meta;

const Template: Story<HeaderProps> = args => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    label: 'Primary',
    size: 'md',
    disabled: false,
    onClick: () => {
        return;
    },
};
