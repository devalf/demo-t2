import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Header} from 'components/Layout/Header';
import ProductsList from 'components/ProductsList';

import styles from './styles.scss';

export default class Main extends Component {
    render() {
        return (
            <div className={styles.containerDemo}>
                <Router>
                    <Header />

                    <Switch>
                        <Route path='/' render={() => <>home page</>} />
                    </Switch>

                    <ProductsList />
                </Router>
            </div>
        );
    }
}
