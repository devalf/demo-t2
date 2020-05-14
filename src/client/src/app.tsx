import React from 'react';
import {hot} from 'react-hot-loader/root';

import Main from 'components/Main';

import './css/main.scss';

class App extends React.Component {
    render() {
        return <Main />;
    }
}

export default hot(App);
