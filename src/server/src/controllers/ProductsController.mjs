// import Product from '../models/ProductModel';
import {errorResponse} from '../helpers/apiResponse.mjs';

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
    (req, res) => {
        try {
            // Product.find();

            throw new Error('custom generated error');
        } catch (e) {
            return errorResponse(res, e.message);
        }
    }
];
