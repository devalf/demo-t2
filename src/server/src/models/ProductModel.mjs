import mongoose from 'mongoose';

const {Schema} = mongoose;

const about = 'about';
const company = 'company';
const guid = 'guid';
const picture = 'picture';
const price = 'price';
const registered = 'registered';
const tags = 'tags';
const title = 'title';

// list of properties allowed for responding
export const productData = [
    about,
    company,
    guid,
    picture,
    price,
    registered,
    tags,
    title
];

const ProductSchema = new Schema({
    [about]: {type: String},
    [company]: {type: String, required: true},
    [guid]: {type: String, required: true},
    [picture]: {type: String},
    [price]: {type: Number, required: true},
    [registered]: {type: String},
    [tags]: {type: Array},
    [title]: {type: String, required: true}
}, {timestamps: true});

export default mongoose.model('Product', ProductSchema);
