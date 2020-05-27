import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Header} from 'components/Layout/Header';
import API from 'utils/API';
import {getAllProducts} from 'constants/endpoints';

import styles from './styles.scss';

export default class Main extends Component {
    async componentDidMount() {
        const {data: {data: allData}} = await API.get(getAllProducts);

        console.log(allData);
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
