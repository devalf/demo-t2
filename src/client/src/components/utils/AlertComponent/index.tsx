import React, {ReactElement} from 'react';
import {Alert} from 'shards-react';

type Props = {
    text: string;
    theme?: string;
};

// Component is too raw, and done for now only as success Alert, will refactored later
const AlertComponent = ({text, theme = 'success'}: Props): ReactElement => {
    return <>
        {text && <Alert theme={theme}>
            {text}
        </Alert>}
    </>;
};

export default AlertComponent;
