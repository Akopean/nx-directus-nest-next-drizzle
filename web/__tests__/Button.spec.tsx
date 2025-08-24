import { render } from '@testing-library/react';
import Button from '@ui/button';

describe('Button component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeTruthy();
  });
});
