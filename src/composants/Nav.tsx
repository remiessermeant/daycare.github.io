import React from 'react';

function Nav() {
    return (
        <nav className="underline space-x-4 underline-offset-2">
            <a href="/">Home</a>
            <a href="/upload-video">Upload Video</a>
            <a href="/search">Search</a>
        </nav>
    );
}

export default Nav;
