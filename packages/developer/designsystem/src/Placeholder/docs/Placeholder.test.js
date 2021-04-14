import React from 'react';
import { render, screen } from '@testing-library/react';

import Placeholder from '../Placeholder';

describe('Placeholder Component', () => {
  // Smoke Test
  it('renders without crashing', () => {
    expect(() => render(<Placeholder />)).not.toThrow();
  });
  it('renders with correct Label', () => {
    render(<Placeholder text="My Label Text" />);
    expect(screen.getByText('My Label Text')).toBeInTheDocument();
  });
});
