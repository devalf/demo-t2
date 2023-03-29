import React, {FC} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import {Layout} from './components';

const queryClient = new QueryClient();

const App: FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Layout/>
        </QueryClientProvider>
    );
};

export default App;
