export interface Passenger {
    name: string;
    children?: string[];
}

function printChildren(passenger: Passenger): void {
    console.log(passenger.children?.join(', '));
}

function howManyChildren(passenger: Passenger): number {
    return passenger.children?.length || 0;
}

const passenger1: Passenger = {
    name: 'John'
};
console.log(passenger1);

if (howManyChildren(passenger1) > 0) {
    printChildren(passenger1);
}else {
    console.log('No children');
}

const passenger2: Passenger = {
    name: 'John',
    children: ['John Jr', 'Mary']
};
console.log(passenger2);

if (howManyChildren(passenger2) > 0) {
    printChildren(passenger2);
}else {
    console.log('No children');
}
