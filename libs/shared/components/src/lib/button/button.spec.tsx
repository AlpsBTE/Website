import { render } from '@testing-library/react';

import Button, { ButtonProps } from './button';

const args: ButtonProps = {
  label: 'string',
  onClick: () => {
    return;
  },
  size: 'md',
  disabled: false,
};

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button {...args} />);
    expect(baseElement).toBeTruthy();
  });
});
