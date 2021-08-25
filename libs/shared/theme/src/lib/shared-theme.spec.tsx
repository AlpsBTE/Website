import { render } from '@testing-library/react';

import SharedTheme from './shared-theme';

describe('SharedTheme', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedTheme />);
    expect(baseElement).toBeTruthy();
  });
});
