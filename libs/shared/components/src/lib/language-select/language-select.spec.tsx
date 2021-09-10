import { render } from '@testing-library/react';

import LanguageSelect from './language-select';

describe('LanguageSelect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LanguageSelect />);
    expect(baseElement).toBeTruthy();
  });
});
