export type Product = {
    about: string;
    company: string;
    guid: string;
    picture: string;
    price: number;
    registered: string;
    tags: Array<string>;
    title: string;
};

export type Products = {
    products: Product[]
};
