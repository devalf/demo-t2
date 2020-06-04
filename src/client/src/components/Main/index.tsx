import React, {Component, ReactNode} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Header} from 'components/Layout/Header';
import ProductsList from 'components/ProductsList';

import styles from './styles.scss';

export default class Main extends Component {
    render(): ReactNode {
        return (
            <div className={styles.containerDemo}>
                <Router>
                    <Header />

                    <Switch>
                        <Route path='/' component={ProductsList} />
                    </Switch>
                </Router>
            </div>
        );
    }
}
