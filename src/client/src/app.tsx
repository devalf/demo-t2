import React from 'react';
import {hot} from 'react-hot-loader/root';

import Main from 'components/Main';

import './css/main.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css'

class App extends React.Component {
    render() {
        return <Main />;
    }
}

export default hot(App);
