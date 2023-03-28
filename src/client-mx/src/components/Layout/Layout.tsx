import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {Home} from '../../pages';

export const Layout: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
    );
};
