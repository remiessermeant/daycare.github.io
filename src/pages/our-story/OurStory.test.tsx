import React from 'react';
import {render, screen} from '@testing-library/react';
import OurStory from './OurStory';

test('renders learn react link', () => {
    render(<OurStory/>);
    const linkElement = screen.getByText(/Search Page/i);
    expect(linkElement).toBeInTheDocument();
});
