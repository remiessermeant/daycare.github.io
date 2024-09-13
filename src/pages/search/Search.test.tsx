import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './Search';

test('renders learn react link', () => {
    render(<Search />);
    const linkElement = screen.getByText(/Search Page/i);
    expect(linkElement).toBeInTheDocument();
});
