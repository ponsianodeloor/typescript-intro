import {Product} from "./Product.ts";
import {Tax} from "./Tax.ts";

export interface taxCalculationOptions {
    tax: Tax,
    products: Product[],
}

export function taxCalculation(options: taxCalculationOptions):[number, number]{ // return type is a tuple
    const { tax, products } = options;
    let total = 0;


    products.forEach((product) => {
        total += product.price;
    });

    return [total, total * tax.tax];
}
