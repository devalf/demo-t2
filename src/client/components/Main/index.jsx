import React, {Component} from 'react';

import Mapbox from 'components/Mapbox';

import styles from './styles.scss';

class Main extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Mapbox />
            </div>
        );
    }
}

export default Main;
