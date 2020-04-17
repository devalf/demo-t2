import Product from '../models/ProductModel.mjs';
import {errorResponse, successResponseWithData} from '../helpers/apiResponse.mjs';

function ProductData(data) {
    this.id = data._id;
    this.guid = data.guid;
    this.title = data.title;
    this.picture = data.picture;
    this.company = data.company;
    this.about = data.about;
    this.registered = data.registered;
    this.tags = data.tags;
    this.price = data.price;
}

export const allProductsList = [
    async (req, res) => {
        try {
            const products = await Product.find({});

            successResponseWithData(res, products);
        } catch (e) {
            return errorResponse(res, e);
        }
    }
];
