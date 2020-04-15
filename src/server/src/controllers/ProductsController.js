import Product from '../models/ProductModel';

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
