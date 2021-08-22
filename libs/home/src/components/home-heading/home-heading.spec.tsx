import { render } from '@testing-library/react';

import HomeHeading from './home-heading';

describe('HomeHeading', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeHeading />);
    expect(baseElement).toBeTruthy();
  });
});
