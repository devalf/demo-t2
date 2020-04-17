export const notFoundResponse = (res, msg) => {
    const data = {
        status: 0,
        message: msg
    };

    return res.status(404).json(data);
};

export const errorResponse = (res, msg) => {
    const data = {
        status: 0,
        message: msg
    };

    return res.status(500).json(data);
};
