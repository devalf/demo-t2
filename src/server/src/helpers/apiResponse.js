exports.notFoundResponse = function(res, msg) {
    const data = {
        status: 0,
        message: msg
    };

    return res.status(404).json(data);
};
