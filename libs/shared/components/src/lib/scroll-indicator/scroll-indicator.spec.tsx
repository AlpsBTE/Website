import { render } from '@testing-library/react';

import ScrollIndicator from './scroll-indicator';

describe('ScrollIndicator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScrollIndicator />);
    expect(baseElement).toBeTruthy();
  });
});
