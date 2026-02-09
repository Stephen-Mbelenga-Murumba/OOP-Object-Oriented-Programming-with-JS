'use strict';

//////////////////LECTURE///////////

//// Constructor function & the new operator.

/* const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const steve = new Person('Stephen', 1991);
console.log(steve);

//// Notes
//// 1. New {} is created
//// 2. function is called, this = {}
//// 3. {} is linked to a prototype
//// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);
console.log(steve instanceof Person);

////// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

steve.calcAge();
matilda.calcAge();
jack.calcAge();

// console.log(steve.__proto__);
console.log(steve.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(steve)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = 'Homo Sapiens';
console.log(steve.species, jack.species);
// console.log(steve);
console.log(steve.hasOwnProperty('firstName')); // true
console.log(steve.hasOwnProperty('species')); // false

////// Prototypal Inheritance on Built-In Objects

console.log(steve.__proto__);
//// Object.prototype (top of prototype chain)
console.log(steve.__proto__.__proto__);
console.log(steve.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);

//// Example

const arr = [3, 6, 5, 6, 9, 5, 9, 6]; //// new Array = []
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
const func = x => x + 1; */

// Coding Challenge #1

/* Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 
'speed' property. The 'speed' property is the current speed of the car in 
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and 
'brake' multiple times on each of them.
Test data:
    Data car 1: 'BMW' going at 120 km/h
    Data car 2: 'Mercedes' going at 95 km/h
GOOD LUCK ☺️ 

//// Solution
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
// console.log(bmw, mercedes);
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.brake();
mercedes.brake();
mercedes.accelerate(); */

//// ES6 Classes

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //// Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hello ${this.firstName}`);
  }
}

const steve = new PersonCl('Stephen', 1991);
console.log(steve);
steve.calcAge();

console.log(steve.__proto__ === PersonCl.prototype); // true

// PersonCl.prototype.greet = function () {
//   console.log(`Hello ${this.firstName}`);
// };
steve.greet();
