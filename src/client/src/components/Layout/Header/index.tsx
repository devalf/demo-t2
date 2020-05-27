import React, {ReactElement} from 'react';
import {Link} from 'react-router-dom';

export const Header = (): ReactElement => {
    return (
        <header>
            <nav className='bg-secondary navbar navbar-dark navbar-expand-lg'>
                <Link className='navbar-brand' to='/'>Home</Link>
            </nav>
        </header>
    );
};
