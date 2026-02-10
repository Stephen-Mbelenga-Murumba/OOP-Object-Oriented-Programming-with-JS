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

// const account = {
//   owner: 'Stephen',
//   movements: [200, 530, 120, 300],
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// console.log(account.latest); // 300
// account.latest = 50;
// console.log(account.movements); // [200, 530, 120, 300, 50]*/

// //// Static Methods
// //// Use static keyword to create static methods.

// //// OBJECT.CREATE

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Stephen';
// steven.birthYear = 2002;
// steven.calcAge();
// console.log(steven.__proto__ === PersonProto); // true
// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

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

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} going at ${this.speed} km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} going at ${this.speed} km/h`);
//   }
//   set speedUS(speed) {
//     this._speed = speed * 1.6;
//   }
//   get speedUS() {
//     return `${this.make} going at ${this.speed / 1.6} ml/h`;
//   }
// }

// const ford = new CarCl('Ford', 120);
// ford.accelerate();
// ford.brake();
// ford.brake();
// console.log(ford.speedUS);
// ford.speedUS = 50;
// console.log(ford); // _speed : 80

//// INHERITANCE BETWEEN "CLASSES": CONSTRUCTOR FUNCTIONS

//// 1. Constructor Function
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}.`);
// };

// const stephen = new Student('Stephen', 1991, 'Computer Science');
// stephen.introduce();
// stephen.calcAge();

// console.log(stephen.__proto__);
// console.log(stephen.__proto__.__proto__);

// console.log(stephen instanceof Student); // true
// console.log(stephen instanceof Person); // true
// console.log(stephen instanceof Object); // true

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor); // Student

/*
////// Coding Challenge #3
Your tasks:
1. Use a constructor function to implement an Electric Car (called 'EV') as a child "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property)
2. Implement a 'chargeBattery' method which takes an argument 
'chargeTo' and sets the battery charge to 'chargeTo'
3. Implement an 'accelerate' method that will increase the car's speed by 20,
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate', 
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when 
you 'accelerate'! Hint: Review the definition of polymorphism 😉
Test data:
  Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
GOOD LUCK☺️
 */

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };

// const Ev = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // Linking prototypes
// Ev.prototype = Object.create(Car.prototype);

// Ev.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// Ev.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`,
//   );
// };

// // EV.prototype.constructor = EV;
// const tesla = new Ev('Tesla', 120, 23);
// tesla.chargeBattery(90);
// tesla.accelerate();
// // tesla.brake();

//////// INHERITANCE BETWEEN 'CLASSES': ES6 Classes

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   //// Instance methods.
//   //// Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hello ${this.firstName}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   //// Set a property that already exist, use underscore(_)
//   set fullName(name) {
//     // console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   //// Static Method
//   static hey() {
//     return `Hey there 👋`;
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always need to be declared first
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}.`);
//   }
//   calcAge() {
//     console.log(`I am ${2037 - this.birthYear} years old.`);
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// console.log(martha);
// martha.introduce();
// martha.calcAge();

//////// INHERITANCE BETWEEN 'CLASSES': OBJECT.CREATE

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// // const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}.`);
// };
// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

//// Example Classes
// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     this.movements = [];
//     this.locale = navigator.language;

//     console.log(`Thanks for opening an account with us, ${this.owner}`);
//   }
//   // Public interface
//   deposit(val) {
//     this.movements.push(val);
//   }
//   withdrawals(val) {
//     this.deposit(-val);
//   }
//   approveLoan(val) {
//     return true;
//   }
//   requestLoan(val) {
//     this.approveLoan(val) && this.deposit(val);
//     console.log('Loan Approved ☺️');
//   }
// }

// const acc1 = new Account('Stephen', 'KSH', 1111);
// console.log(acc1);
// acc1.deposit(250);
// acc1.withdrawals(140);
// console.log(acc1.pin);
// acc1.requestLoan(50);
// acc1.approveLoan(50);

//// ENCAPSULATION: Private Class Fields and Methods

// 1. Public fields
// 1. Private fields
// 1. Public methods
// 1. Public methods
// STATIC version of these 4

class Account {
  // Public fields
  locale = navigator.language;
  bank = 'Bankist';

  // private fields
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.locale = navigator.language;

    console.log(
      `Thanks for opening an account with ${this.bank}, ${this.owner}`,
    );
  }
  // Public interface
  getMovements() {
    return this.#movements;
    // Not chainable
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  // Private Method
  #approveLoan(val) {
    // Fake method
    return true;
  }
  requestLoan(val) {
    this.#approveLoan(val) && this.deposit(val);
    console.log('Loan Approved ☺️');
    return this;
  }
  // static method
  // static #test() {
  //   console.log('TEST');
  // }
}

const acc1 = new Account('Stephen', 'KSH', 1111);
acc1.deposit(300);
acc1.withdraw(150);
// console.log(acc1.getMovements());

// console.log(acc1.movements); ////Undefined
// console.log(acc1.#approveLoan); // SyntaxError
// Account.#test(); // SyntaxError

//// Chaining Methods

const movements = acc1
  .deposit(400)
  .withdraw(300)
  .withdraw(50)
  .requestLoan(2500)
  .withdraw(400)
  .getMovements();
console.log(movements);
