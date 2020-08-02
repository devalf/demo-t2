import React, {ReactElement} from 'react';
import {Alert} from 'shards-react';

type Props = {
    text: string;
};

// Component is too raw, and done for now only as success Alert, will refactored later
const AlertComponent = ({text}: Props): ReactElement => {
    return <>
        {text && <Alert theme='success'>
            {text}
        </Alert>}
    </>;
};

export default AlertComponent;
