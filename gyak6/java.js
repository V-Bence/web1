import { list } from './user.js'

const userName = 'Pista';
console.log(list[0].name);

//primitive types
const active = true; //boolean
const age = 33; //number
const message = 'Ipse'; //string
const nothing = null; //Object
let start; //undefined

console.log(typeof active);
console.log(typeof age);
console.log(typeof message);
console.log(typeof nothing);
console.log(typeof start);

Number.prototype.hello = () => console.log('Hello from number');
console.log(age.hello());

//collections
const number = [1,2,3,4,5,6,7];
const settings = [1, true, [44, 55], 'my sweet heart'];
console.log(settings[2][1]);
console.log(settings.length);

//object
console.log(list[0].age);
const key = 'name';
console.log(list[0][key]);