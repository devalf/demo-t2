import {createReducer} from '@reduxjs/toolkit';

import {actionTypes} from './actions';
import {ui as initialState} from './initialState';

const setUI = (state, {payload: {search}}) => ({
    ...state,
    search
});

export const ui = createReducer(initialState, {
    [actionTypes.setUI]: setUI
});
