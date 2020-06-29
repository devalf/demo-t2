import React, {Component, ReactNode} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import ErrorBoundary from 'components/ErrorBoundary';
import {Header} from 'components/Layout/Header';
import ProductsList from 'components/ProductsList';
import SingleProduct from 'components/SingleProduct';
import NoMatch from 'components/NoMatch';
import {singleProductPageRoute} from 'constants/routes';

import styles from './styles.scss';

export default class Main extends Component {
    render(): ReactNode {
        return (
            <div className={styles.containerDemo}>
                <ErrorBoundary>
                    <Router>
                        <Header />

                        <Switch>
                            <Route exact path='/' component={ProductsList} />
                            <Route path={singleProductPageRoute} >
                                <SingleProduct />
                            </Route>
                            <Route component={NoMatch} />
                        </Switch>
                    </Router>
                </ErrorBoundary>
            </div>
        );
    }
}
