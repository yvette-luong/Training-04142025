/**
 * primitive data types
 *
 * boolean
 * number
 * string
 * undefined
 * null
 *
 * bigint
 * symbol
 *
 *
 * reference
 * object {}
 * array []
 * function () => {}
 *
 */

// var, let, const
// let num = 1;
// console.log(typeof num); // number

// let obj = {
//   name: "alice",
//   age: 18,
// };

// console.log(obj);

// console.log(typeof null);

// // this keyword
// // syntax
// function foo() {
//   return 1;
// }

// const foo2 = (a) => a;

// let number1 = 1;
// let number2 = "1";

// // type coercion, implicit type conversion
// console.log(number1 == number2);
// explicit type covnersion
// let num1 = "qweqwe";
// console.log(typeof parseInt(num1).toString());
// console.log(+num1);

// // ==: loose equality
// // ===: strict equality

// const obj1 = {
//   name: "alice",
//   age: 18,
// }; // 0000001

// const obj2 = {
//   name: "alice",
//   age: 18,
// }; // 0000002

// console.log(obj1 === obj2); // false: because we are comparing references
// // 0000001 === 0000002 -> false

// const obj3 = obj1; // assign reference
// console.log(obj1 === obj3);

// obj1.name = "bob";
// console.log(obj1);
// console.log(obj3);

// function foo(input) {
//   // primitive data types pass by value
//   input = 2;
//   console.log(input); // 2
// }

// let num = 1;
// foo(num);
// console.log(num); // 1

// function foo2(input) {
//   // object data types pass by referenece
//   input.name = "bob";
//   console.log(input); // bob
// }

// const obj1 = {
//   name: "alice",
//   age: 18,
// };
// foo2(obj1);
// console.log(obj1); // bob

//                  var     |     let      |    const
// scope:        function         block         block
// hoisting:        yes           no            no
// redeclare:       yes           no            no
// reassign:        yes           yes           no

// function foo() {
//   var a;
//   console.log(a);
//   if (true) {
//     var a = 1;
//     console.log(a);
//   }
//   console.log(a);
// }

// // foo();

// function foo2() {
//   if (true) {
//     console.log(a);
//     let a = 1;
//     console.log(a);
//   }
//   console.log(a);
// }

// // foo2();

// // var
// // es6 -> let, const

// const obj = {
//   name: "alice",
//   age: 18,
// };

// obj.name = "bob";

// closure
// function foo() {
//   // outer scope
//   let a = 1;

//   function foo1() {
//     console.log(a);
//   }
//   foo1();
// }
// foo();
// console.log(a);

// function foo() {
//   let counter = 0;

//   return function () {
//     counter += 1;
//     console.log("add is called");
//   };
// }

// const add = foo();

// add();
// add();
// add();
// add();
// add();

// limit the number of function calls to 3

// function limitFunctionCalls(fn) {
//   let limitCounter = 1;

//   return function () {
//     console.log("limit:", limitCounter);

//     if (limitCounter <= 3) {
//       fn();
//       limitCounter += 1;
//       console.log("limit:", limitCounter);
//     } else {
//       console.error("reached call limit");
//     }
//   };
// }

// const limitedAddFn = limitFunctionCalls(add);

// for (let i = 0; i < 5; i++) {
//   limitedAddFn();
// }

// ==================== JS Day 2 ============================
// ES 6
// arrow function, let/const, spread operator, template literals, for ... of, destrucutring

// spread operator ...

// const arr = [1, 2, 3, 4, 5];
// const arr2 = [...arr]; // shallow copy
// arr[0] = 0;
// console.log(arr, arr2);

// const person = {
//   name: "alice",
//   age: 18,
//   address: {
//     city: "xxx",
//     street: "zzz",
//     no: "12312",
//   },
//   date: new Date(),
//   // address: 0000001
// };

// // shallow copy: for nested objects, the properties will point to the same reference as the original one
// const person2 = { ...person };
// person2.name = "bob";
// person2.address.city = "chicago";
// console.log(person.address === person2.address);

// // deep copy
// // 1. write your own deep copy function
// // 2. lodash
// // 3. JSON.stringify() // not best practice, not recommended
// const stringPerson = JSON.stringify(person);
// // console.log(stringPerson);
// const parsedPerson = JSON.parse(stringPerson);
// console.log(person.date.toJSON());
// console.log(parsedPerson);
// // console.log(person === parsedPerson);

// // rest operator ...: collecting arguments and put them into one array
// function foo(a, b, ...args) {
//   console.log(a, b, args);
//   console.log(arguments); // array-like object
// }

// foo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// // destructuring
// console.log(person.name);
// console.log(person.address.city);
// console.log(person.age);

// // const personName = person.name
// // const city = person.address.city
// const { name: personName, age, address } = person;
// console.log(personName, age, address);

// person.name = "bob";

// // template literals
// console.log(`hi, my name is ${person.name}`);

// console.log(Object.entries(person));

// for ... of: works for iterable objects
// for (ele of arr) {
//   console.log(ele);
// }

// for (ele of person) {
//   console.log(ele); // object is not iterable
// }

// for ... in: loop on the enumerable properties on an object
// for (ele in person) {
//   console.log(ele);
// }

/**
 * arrow function vs function keyword
 * 1. syntax
 * 2. hoisting
 * 3. this keyword: it depends on the calling context, refering to the caller of the function
 */

// foo(); // => undefined()
var foo = () => {
  console.log("hello from arrow function");
};

// function keyword also does hoisting
function fn() {
  console.log("hello");
  console.log(this);
}

// the context of this keyword
// fn();
const person = {
  name: "alice",
  sayHi() {
    // using regular function
    console.log(this);
    // function foo() {
    //   console.log(this); // window
    // }
    const foo = () => {
      console.log(this);
    };
    foo();
  },
  sayHi2: () => {
    // console.log(this);
  },
};

// console.log(this);

// person.sayHi(); // => person
// window.person.sayHi2(); // => window

person.sayHi();
