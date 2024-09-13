import React from 'react';
import {render, screen} from '@testing-library/react';
import Photo from './Photo';

test('renders learn react link', () => {
    render(<Photo/>);
    const linkElement = screen.getByText(/Upload Video/i);
    expect(linkElement).toBeInTheDocument();
});
