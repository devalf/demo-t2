import mongoose from 'mongoose';

const {Schema} = mongoose;

const ProductSchema = new Schema({
    guid: {type: String, required: true},
    title: {type: String, required: true},
    picture: {type: String},
    company: {type: String, required: true},
    about: {type: String},
    registered: {type: String},
    tags: {type: Array},
    price: {type: Number, required: true}
}, {timestamps: true});

export default mongoose.model('Product', ProductSchema);
