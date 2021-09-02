import { render } from '@testing-library/react';

import Accordeon from './accordeon';

describe('Accordeon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Accordeon />);
    expect(baseElement).toBeTruthy();
  });
});
