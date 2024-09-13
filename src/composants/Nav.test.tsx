import React from 'react';
import { render, screen } from '@testing-library/react';
import Nav from './Nav';

test('renders learn react link', () => {
    render(<Nav />);
    const linkElementHome = screen.getByText(/Home/i);
    expect(linkElementHome).toBeInTheDocument();
    const linkElementUploadVideo = screen.getByText(/Upload Video/i);
    expect(linkElementUploadVideo).toBeInTheDocument();
    const linkElementSearch = screen.getByText(/Search/i);
    expect(linkElementSearch).toBeInTheDocument();
});
