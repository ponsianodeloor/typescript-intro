function add(a: number, b: number): number {
  return a + b;
}

const result:number = add(1, 2);
console.log(result); // 3

//lambda function
const add2 = (a: number, b: number): number => a + b;
console.log(add2(1, 2)); // 3

//parameter, optional parameter, default value
function buildName(firstName: string, lastName?: string, age: number = 30): string {
  if (lastName) {
    return `${firstName} ${lastName} ${age}`;
  } else {
    return `${firstName} ${age}`;
  }
}

console.log(buildName('John')); // John 30

console.log(buildName('John', 'Doe')); // John Doe 30

export{};
