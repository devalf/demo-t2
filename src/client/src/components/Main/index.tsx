import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Header} from 'components/Layout/Header';
import API from 'utils/API';
import {getProducts} from 'constants/endpoints';

import styles from './styles.scss';

class Main extends Component {
    async componentDidMount() {
        const data = await API.get(getProducts);

        console.log(data);
    }

    render() {
        return (
            <div className={styles.containerDemo}>
                <Router>
                    <Header />

                    <Switch>
                        <Route path='/' render={() => <>home page, implement fetch and rendering data...</>} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Main;
