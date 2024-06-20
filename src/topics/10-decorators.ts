function myDecorator<T extends {new(...args: any[]): {}}>(constructor: T){
    return class extends constructor{
        newProperty = 'new property';
        myProperty = 'overriden';
    }
}

@myDecorator
export class SuperClass{
    public myProperty: string = 'Abc123';
    print(){
        console.log('Hello from SuperClass');
    }
}

console.log(SuperClass);
const myClass = new SuperClass();
myClass.print();
