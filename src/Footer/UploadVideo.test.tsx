import React from 'react';
import { render, screen } from '@testing-library/react';
import UploadVideo from './UploadVideo';

test('renders learn react link', () => {
    render(<UploadVideo />);
    const linkElement = screen.getByText(/Upload Video/i);
    expect(linkElement).toBeInTheDocument();
});
