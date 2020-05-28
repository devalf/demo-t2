export const requestStartReducer = (state) => ({
    ...state,
    isLoading: true
});

export const requestErrorReducer = (state, {payload: {error: err}}) => ({
    ...state,
    isLoading: false,
    error: err?.message
});
