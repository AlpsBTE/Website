import { render } from '@testing-library/react';
/*eslint-disable-next-line */
import { Router } from '@alpsbte/router';

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Router></Router>);
    expect(baseElement).toBeTruthy();
  });
});
