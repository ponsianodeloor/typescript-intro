interface Address {
    street: string;
    country: string;
    ciudad: string;
}

interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        ciudad: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.country;
    }
}

const address = superHeroe.showAddress(); // Spiderman, NY, USA
console.log( address ); // Spiderman, NY, USA


export {};
