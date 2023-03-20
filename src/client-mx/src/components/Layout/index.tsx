import React, {Component, ReactNode} from 'react';
import {Route, Routes} from 'react-router-dom';

import ErrorBoundary from '../ErrorBoundary';

import styles from './styles.scss';

export default class Main extends Component {
    render(): ReactNode {
        return (
            <div className={styles.containerDemo}>
                <ErrorBoundary>
                    <Routes>
                        <Route path='/' element={<div>Home</div>}/>
                    </Routes>
                </ErrorBoundary>
            </div>
        );
    }
}
