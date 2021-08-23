import { render } from '@testing-library/react';

import Router from './router';

describe('Router', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Router />);
    expect(baseElement).toBeTruthy();
  });
});
