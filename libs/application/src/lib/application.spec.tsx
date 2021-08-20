import { render } from '@testing-library/react';

import Application from './application';

describe('Application', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Application />);
    expect(baseElement).toBeTruthy();
  });
});
