import React from 'react';
import {render, screen} from '@testing-library/react';
import AboutUs from './AboutUs';

test('renders learn react link', () => {
    render(<AboutUs/>);
    const linkElement = screen.getByText(/Upload Page/i);
    expect(linkElement).toBeInTheDocument();
});
