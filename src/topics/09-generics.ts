export function whatsMyType<T>(arg: T): T {
  return arg;
}

const myString = whatsMyType('Hello');
console.log(myString);
console.log(typeof myString);

const myNumber = whatsMyType(10);
console.log(myNumber);
console.log(typeof myNumber);

const myBoolean = whatsMyType(true);
console.log(myBoolean);
console.log(typeof myBoolean);


