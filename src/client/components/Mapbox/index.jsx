import React, {Component} from 'react';

import mapbox from 'mapbox-gl';
import {mapboxAccessToken} from 'configs';

import styles from './styles.scss';

mapbox.accessToken = mapboxAccessToken;

class Mapbox extends Component {
    componentDidMount() {
        this.map = new mapbox.Map({
            container: 'MAPBOX_BLOCK',
            style: 'mapbox://styles/mapbox/streets-v11'
        });
    }

    render() {
        return (
            <div id='MAPBOX_BLOCK' className={styles.container}></div>
        );
    }
}

export default Mapbox;
