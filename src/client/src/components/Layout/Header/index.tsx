import React, {ReactElement} from 'react';
import {Link} from 'react-router-dom';

type Props = {

};

export const Header = (props: Props): ReactElement => {
    return (
        <header>
            <nav className='bg-secondary navbar navbar-dark navbar-expand-lg'>
                <Link className='navbar-brand' to='/'>Home</Link>
            </nav>
        </header>
    );
};
