import { render } from '@testing-library/react';

import Rt from './rt';

describe('Rt', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Rt />);
    expect(baseElement).toBeTruthy();
  });
});
