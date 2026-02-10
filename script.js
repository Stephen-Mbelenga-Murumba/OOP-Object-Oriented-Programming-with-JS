'use strict';

//////////////////LECTURE///////////

/* //// Constructor function & the new operator.

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const steveM = new Person('Stephen', 1991);
console.log(steveM);

//// Notes
//// 1. New {} is created
//// 2. function is called, this = {}
//// 3. {} is linked to a prototype
//// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);
console.log(steveM instanceof Person);

////// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
Person.hey = function () {
  console.log(`Hey there 👋.`);
};
Person.hey();
// jack.hey();

steveM.calcAge();
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
const func = x => x + 1; 

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

/* class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //// Instance methods.
  //// Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hello ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  //// Set a property that already exist, use underscore(_)
  set fullName(name) {
    // console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  //// Static Method
  static hey() {
    return `Hey there 👋`;
  }
}

const steve = new PersonCl('Stephen Mbelenga', 1991);
// console.log(steve);
// steve.calcAge();
console.log(steve.age);
const jessica = new PersonCl('Jessica Davis', 2015);
// console.log(jessica.fullName);
console.log(PersonCl.hey());
// console.log(jessica.hey()); //// TypeError: Not a function

// console.log(steve.__proto__ === PersonCl.prototype); // true

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hello ${this.firstName}`);
// // };
// steve.greet(); // Hello Stephen */

//// Setters and Getters

const account = {
  owner: 'Stephen',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest); // 300
account.latest = 50;
console.log(account.movements); // [200, 530, 120, 300, 50]*/

//// Static Methods
//// Use static keyword to create static methods.

//// OBJECT.CREATE

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Stephen';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven.__proto__ === PersonProto); // true
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

/*
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but 
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
  Data car 1: 'Ford' going at 120 km/h
GOOD LUCK ☺️
 */

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
  set speedUS(speed) {
    this._speed = speed * 1.6;
  }
  get speedUS() {
    return `${this.make} going at ${this.speed / 1.6} ml/h`;
  }
}

const ford = new CarCl('Ford', 120);
// ford.accelerate();
// ford.brake();
// ford.brake();
// console.log(ford.speedUS);
// ford.speedUS = 50;
// console.log(ford); // _speed : 80

//// INHERITANCE BETWEEN "CLASSES": CONSTRUCTOR FUNCTIONS
