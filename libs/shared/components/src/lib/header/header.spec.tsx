import { render } from '@testing-library/react';

import Header, { HeaderProps } from './header';

describe('Header', () => {
  const HeaderProps: HeaderProps = {
    headerText: 'Test Title',
    forceColor: false,
    navItems: [],
    mobileBreakpoint: 600,
  };

  it('should render successfully', () => {
    const { baseElement } = render(<Header {...HeaderProps} />);
    expect(baseElement).toBeTruthy();
  });
});
