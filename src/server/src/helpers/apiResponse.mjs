export const notFoundResponse = (res, message) => {
    const data = {
        status: 0,
        message
    };

    return res.status(404).json(data);
};

export const errorResponse = (res, message) => {
    const data = {
        status: 0,
        message
    };

    return res.status(500).json(data);
};

export const successResponseWithData = (res, data, message) => {
    const resData = {
        status: 1,
        message,
        data
    };

    return res.status(200).json(resData);
};

export const validationErrorWithData = (res, message='Bad request', data) => {
    const resData = {
        status: 0,
        message,
        data
    };

    return res.status(400).json(resData);
};
