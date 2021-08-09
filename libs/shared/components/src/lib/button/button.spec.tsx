import { render } from '@testing-library/react';

import Button, { ButtonProps } from './Button';

const args: ButtonProps = {
  label: 'string',
  onClick: () => {
    return;
  },
  size: 'md',
  style: {},
  disabled: false,
};

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button {...args} />);
    expect(baseElement).toBeTruthy();
  });
});
