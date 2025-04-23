// function foo() {
//   console.log("hi");
// }

// // foo();

// setTimeout(() => {
//   foo();
// }, 3000);

// event loop
/**
 * call stack: keep track of what is currently being executed
 * webapi: async api, handles asynchronous operations, making sure it's non-block
 * callback queue: maintain the async callbacks, when the callstack is empty, it pushes callbacks to the callstack
 * macrotask queue, microtask queue (has higher priority to be executed)
 */

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 3000);

// setTimeout(() => {
//   console.log(3);
// }, 0);

// console.log(4);

function getData1(cb) {
  setTimeout(() => {
    const data = "1st response";
    cb(data);
  }, 1000);
}
function getData2(cb) {
  setTimeout(() => {
    const data = "2nd response";
    cb(data);
  }, 1000);
}
function getData3(cb) {
  setTimeout(() => {
    const data = "3rd response";
    cb(data);
  }, 1000);
}

// callback hell
// getData1((value) => {
//   console.log(value);
//   getData2((value) => {
//     console.log(value);
//     getData3((value) => {
//       console.log(value);
//     });
//   });
// });

// promise, async/await
// pending, fulfilled, rejected

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("something went wrong");
//     return;
//     resolve(1);
//   }, 0);
// });

// console.log(p);

// //.then and .catch will return a new promise
// p.then((data) => {
//   console.log("in then", data);
// })
//   .catch((error) => {
//     // chaining
//     console.log(error);
//     return Promise.resolve(2);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// async/await -> syntax sugar

// async function foo() {
//   try {
//     const p = await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject("something went wrong");
//         // console.log("before resolve");
//         // resolve(1);
//         // console.log("after resolve");
//       }, 2000);
//     });

//     console.log("after promise");
//     console.log(p);
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log("finally");
//   }
// }

// foo();

// async function fetchData(url) {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
//   const { title, id } = data;
//   return {
//     title,
//     id,
//   };
// }

// // fetchData("https://jsonplaceholder.typicode.com/todos/1").then((data) =>
// //   console.log(data)
// // );

// const promiseArr = [];
// for (let i = 1; i < 4; i++) {
//   promiseArr.push(fetchData(`https://jsonplaceholder.typicode.com/todos/${i}`));
// }

// // static methods
// Promise.all(promiseArr)
//   .then((value) => console.log(value))
//   .catch((err) => console.log("err", err));

console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4), 0));

setTimeout(() => {
  console.log(5);
}, 3000);

setTimeout(() => {
  console.log(6);
}, 0);

console.log(7);

// 1, 7, 3, 2, 6, 4, 5

// webapi:

// macro queue:
// micro queue:

// stack:

// IIFE immediately invoked function expression
