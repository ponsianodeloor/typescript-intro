export class Person {
    public name: string;
    protected age: number;
    constructor(name: string, age: number = 30) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
}

const person = new Person('John', 20);
console.log(person);

const person2 = new Person('Jane');
console.log(person2);

person.greet();

// Inheritance
export class Student extends Person {
    constructor(name: string, age: number, public course: string) {
        super(name, age);
    }
    greet() {
        console.log(
            `Hello, my name is ${this.name} and 
            I am ${this.age} years old and 
            I am studying ${this.course}`);
    }
}

const student = new Student('John', 30, 'Angular');
console.log(student);
