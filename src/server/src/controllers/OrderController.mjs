import {
    successResponseWithData
} from '../helpers/apiResponse.mjs';

export const makeOrder = [
    async (req, res) => {
        // TODO use next params to handle order
        console.log(req.body.params);

        // Just simulation of successful order request
        successResponseWithData(res, {
            message: 'Your order has been processed successfully'
        })
    }
];
