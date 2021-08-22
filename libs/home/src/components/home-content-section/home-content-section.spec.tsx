import { render } from '@testing-library/react';

import HomeContentSection from './home-content-section';

describe('HomeContentSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeContentSection />);
    expect(baseElement).toBeTruthy();
  });
});
