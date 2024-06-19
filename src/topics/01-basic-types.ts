const name:String = 'John';
let hpPoints: number | String = 100;
hpPoints = 'FULL';
const isAlive: boolean = true;

console.log(name, hpPoints, isAlive); // John 'FULL' true
export {}; // This is needed to avoid the error: Cannot redeclare block-scoped variable 'name'.
