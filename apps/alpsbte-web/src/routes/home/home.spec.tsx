import { render } from '@testing-library/react';

import Home from './home';

describe('Loading', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Home />);

    expect(baseElement).toBeTruthy();
  });

});
