const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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

module.exports = mongoose.model('Product', ProductSchema);
