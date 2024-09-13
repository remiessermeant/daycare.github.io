import React from 'react';
import { render, screen } from '@testing-library/react';
import UploadPage from './UploadPage';

test('renders learn react link', () => {
    render(<UploadPage />);
    const linkElement = screen.getByText(/Upload Page/i);
    expect(linkElement).toBeInTheDocument();
});
