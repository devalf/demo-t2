import Product, {productData} from '../models/ProductModel.mjs';
import {errorResponse, successResponseWithData, validationErrorWithData} from '../helpers/apiResponse.mjs';
import {transformCollectionPickKeys} from '../utils/dataTransformation.mjs';

export const allProductsList = [
    async (req, res) => {
        let {limit=10, offset=0} = req.query;
        limit = parseInt(limit);
        offset = parseInt(offset);
        const isWrongLimit = limit < 1 || limit > 10;
        const isWrongOffset = offset < 0;

        if (isWrongLimit || isWrongOffset) {
            return validationErrorWithData(res);
        }

        try {
            const [{products, totalCount: [{count}]}] = await Product.aggregate([{
                $facet: {
                    products: [
                        {$skip: offset},
                        {$limit: limit}
                    ],
                    totalCount: [
                        {$match: {}},
                        {$count: 'count'}
                    ]
                }
            }]);

            successResponseWithData(res, {
                products: transformCollectionPickKeys(products, productData),
                totalCount: count
            });
        } catch (e) {
            return errorResponse(res, e);
        }
    }
];
