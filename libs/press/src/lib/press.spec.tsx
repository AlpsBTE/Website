import { render } from '@testing-library/react';

import Press from './press';

describe('Press', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Press />);
    expect(baseElement).toBeTruthy();
  });
});
