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

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

function heal(character: Character, healAmount: number): void {
    character.hp += healAmount;
    //character.showHp();
}

const character: Character = {
    name: 'John',
    hp: 100,
    showHp() {
        console.log(`HP: ${this.hp}`);
    }
};

heal(character, 10);
console.log(character.hp); // 110

console.log(character); // { name: 'John', hp: 110, showHp: [Function: showHp] }


export{};
