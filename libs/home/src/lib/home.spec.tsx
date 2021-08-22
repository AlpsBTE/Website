import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './home';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Router>
        <Home />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });
});
