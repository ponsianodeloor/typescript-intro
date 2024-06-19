interface AudioPlayer {
    volume: number;
    duration: number;
    title: string;
    details: Details;
}

interface Details {
    artist: string;
    album: string;
    genre: string;
}

const audioPlayer: AudioPlayer = {
    volume: 50,
    duration: 300,
    title: 'Song Title',
    details: {
        artist: 'Artist Name',
        album: 'Album Name',
        genre: 'Pop',
    },
};

// Destructuring
const { volume, duration, title, details } = audioPlayer;
console.log(volume, duration, title, details);

// Destructuring with functions
const printDetails = ({ artist, album, genre }: Details) => {
    console.log(artist, album, genre);
};
console.log(printDetails(details));

function printDetails2({ artist, album, genre }: Details) {
    console.log(artist, album, genre);
}
printDetails2(details);

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}

const productOne: Product = {
    id: 1,
    name: 'Phone',
    description: 'Phone description',
    price: 10,
};

const productTwo: Product = {
    id: 2,
    name: 'Laptop',
    description: 'Laptop description',
    price: 20,
};

const shoppingCart =[productOne, productTwo];
const tax = 0.1;
const result = taxCalculation({ tax, products: shoppingCart });
console.log(result);

interface taxCalculationOptions {
    tax: number,
    products: Product[],
}

function taxCalculation(options: taxCalculationOptions):[number, number]{ // return type is a tuple
    const { tax, products } = options;
    let total = 0;
    //options.products.forEach((product) => {
    products.forEach((product) => {
        total += product.price;
    });

    //return [total, total * options.tax];
    return [total, total * tax];
}

export {};
