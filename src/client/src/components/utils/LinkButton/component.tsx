import React, {ButtonHTMLAttributes, ReactElement} from 'react';
import cx from 'classnames';
import {RouteComponentProps} from 'react-router-dom';
import {withRouter} from 'react-router';

type Props = {
    className?: string;
    to: string;
    onButtonClick?: (e: Event) => void;
} & ButtonHTMLAttributes<HTMLButtonElement> & RouteComponentProps;

const LinkButton = ({className, children, type, onButtonClick, to, history}: Props): ReactElement => {
    const onClickHandler = (e) => {
        onButtonClick && onButtonClick(e);
        history.push(to);
    };

    return (
        <button
            className={cx('btn', className ? className : 'btn-link')}
            type={type || 'button'}
            onClick={onClickHandler}
        >
            {children}
        </button>
    );
};

export default withRouter(LinkButton);
