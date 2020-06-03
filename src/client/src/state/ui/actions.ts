import {Actions, Payload, SetUI} from './types';

export const actionTypes = {
    setUI: 'SET_UI'
};

export const setUI = (payload: Payload): SetUI => ({
    type: Actions.setUI,
    payload
});
