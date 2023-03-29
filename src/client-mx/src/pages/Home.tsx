import React from 'react';
import {useProducts} from '../state';

export const Home: React.FC = () => {
    const {data, error, isLoading} = useProducts();

    if (isLoading) {
        return <>Loading...</>;
    }

    if (error) {
        console.log('An error has occurred: ' + error.message);

        return null;
    }

    console.log(data);

    return (<div>Home page</div>);
};
