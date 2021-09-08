import { render } from '@testing-library/react';

import PressImage from './press-image';

describe('PressImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PressImage />);
    expect(baseElement).toBeTruthy();
  });
});
