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

function foo() {
  let counter = 0;

  return function () {
    counter += 1;
    console.log("add is called");
  };
}

const add = foo();

// add();
// add();
// add();
// add();
// add();

// limit the number of function calls to 3

function limitFunctionCalls(fn) {
  let limitCounter = 1;

  return function () {
    console.log("limit:", limitCounter);

    if (limitCounter <= 3) {
      fn();
      limitCounter += 1;
      console.log("limit:", limitCounter);
    } else {
      console.error("reached call limit");
    }
  };
}

const limitedAddFn = limitFunctionCalls(add);

for (let i = 0; i < 5; i++) {
  limitedAddFn();
}

// tomorrow: es6
