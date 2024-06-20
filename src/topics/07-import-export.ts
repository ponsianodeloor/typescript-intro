import {Product} from "./Product.ts";
import {taxCalculation} from "./TaxCalculation.ts";
import {Tax} from "./Tax.ts";

const products: Product[] = [
    {
        id: 1,
        name: 'Phone',
        description: 'Phone description',
        price: 10,
    },
    {
        id: 2,
        name: 'Laptop',
        description: 'Laptop description',
        price: 20,
    },
];

const tax:Tax = {
    name: 'IVA',
    tax: 0.1,
};

const [productOne, productTwo] = products;
console.log(productOne, productTwo);

//const tax = 0.1;
const shoppingCart = {
    products
};

const result = taxCalculation({tax, products: shoppingCart.products});
console.log(result);




