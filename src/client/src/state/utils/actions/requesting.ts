const actionTypes = {
    start: 'START_REQUEST_',
    error: 'ERROR_REQUEST_'
};

export const startRequestCreator = (entity) => () => ({
    type: `${actionTypes.start}${entity}`,
    payload: {
        isLoading: true
    }
});

export const errorRequestCreator = (entity) => (error) => ({
    type: `${actionTypes.error}${entity}`,
    payload: {
        error
    }
});
