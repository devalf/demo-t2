import React, {Component} from 'react';
import {FormInput} from 'shards-react';

import styles from './styles.scss';

class Main extends Component {
    render() {
        return (
            <div className={styles.container}>
                Hello World - client-side!
                <div>
                    <FormInput placeholder={'qwerty'} />
                </div>
            </div>
        );
    }
}

export default Main;
