import { render } from '@testing-library/react';

import AboutUs from './about-us';

describe('AboutUs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AboutUs />);
    expect(baseElement).toBeTruthy();
  });
});
