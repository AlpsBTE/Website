import { render } from '@testing-library/react';

import Downloads from './downloads';

describe('Downloads', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Downloads />);
    expect(baseElement).toBeTruthy();
  });
});
