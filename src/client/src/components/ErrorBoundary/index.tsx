import React, {Component, ReactNode} from 'react';

type Props = {
    children: ReactNode
};

export default class ErrorBoundary extends Component<Props> {
    state = {
        hasError: false
    };

    componentDidCatch(error, info): void {
        this.setState({hasError: true});
    }

    render(): ReactNode {
        if (this.state.hasError) {
            return <h4 className='text-center p-5'>Something went wrong :(</h4>;
        }

        return this.props.children;
    }
}
