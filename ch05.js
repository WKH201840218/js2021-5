// <<<<<<< HEAD
// //  익명적 함수
//   let foo = function() {
//       console.log("첫번째 줄");
//      console.log("두번째 줄");
//   };

//  foo();
//  console.log(foo);
// =======
// 익명적 함수
// let foo =function() {
//     console.log("첫번째 줄");
//     console.log("두번째 줄");
// };

// foo();
// console.log(foo);
// >>>>>>> 2b3af220afe78c6c445d9573224d6fc3b39deb2d

//선언적 함수

// let foo = () => {
//     console.log("첫번째 줄");
//     console.log("두번째 줄");
// };

// foo();
// console.log(foo);

// 함수
// function power(x) {
//     return x * x;
// }

// console.log(power(10));

// function foo(x) {
//     let bar = x * x;
//     return bar;
// }

// let foobar = foo(10);
//---------
// console.log(foobar);
// let power = (x) => {
//     x*x;
// }
// function print(name, count) {
//     if (!count) {
//         count = 1;
//     }
//     console.log(`${name}이가 ${count}개 있습니다.`);
// }
// print("사과",10);
// print("사과");
//-----------
// function print(name="무명", count=1) {
//        console.log(`${name}이가 ${count}개 있습니다.`);
//     }
// print("사과",10);
// print("사과");
// print();
//======
// function tenTimes(foo) {
//     for (let i = 0; i < 10; i++) {
//         foo();
//     }
// }

// tenTimes( function () {
//     console.log("함수 호출");
// });
//----------------
// let inputA = '52';
// let inputB = '52.273';
// let inputC = '1403동';

// console.log(parseInt(inputA));

// console.log(parseInt(inputB));
// console.log(parseFloat(inputB));

// console.log(parseInt(inputC));


// console.log(Number(inputA));
// console.log(Number(inputB));
// console.log(Number(inputC));

// <<<<<<< HEAD
// setTimeout(() => {
//     console.log("1초 경과!");
// }, 1000)

// setInterval(() => {
//     console.log("인터벌 1초 경과!");
// }, 1000)
// =======
// setTimeout(() => {
//     console.log("1초 경과!");
// }, 1000)

// let foo = setInterval(() => {
//     console.log("인터벌 1초 경과!");
// }, 1000)

// setTimeout(() => {
//     clearInterval(foo);
// }, 6000)

// let foo;
// foo = 10;
// foo = 20;
// foo = "세번째";


// console.log(foo);

// let foo;
// foo = () => { console.log("1st");}
// foo = () => { console.log("2nd");}
// foo = () => { console.log("3rd");}

// foo();
let name = "dong"
foo = () => { 
    let name = "synn";
    console.log(this.name);
 };
function foo() {
     console.log("this.name"); 
};

foo();