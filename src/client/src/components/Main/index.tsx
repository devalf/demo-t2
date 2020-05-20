import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Header} from 'components/Layout/Header';

import styles from './styles.scss';

class Main extends Component {
    render() {
        return (
            <div className={styles.containerDemo}>
                <Router>
                    <Header />

                    <Switch>
                        <Route path='/test' render={() => <>test page</>} />
                        <Route path='/' render={() => <>home page</>} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Main;
