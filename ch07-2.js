// 예제 7-5
// let foo = new Date();
// console.log(foo);

// foo.setFullYear(foo.getFullYear() + 1);
// foo.setMonth(foo.getMonth() + 11);
// foo.setDate(foo.getDate() + 1);

// console.log(foo);


// 예제7-7
// let now = new Date();
// let before = new Date("Dec 9, 2020");

// let interval = now.getTime() -before.getTime();
// interval = Math.floor(interval / (1000 * 60 * 60 * 24));

// console.log(interval);


//예제 7-8
// let foo = [10, 3, 5, 20];
// let foo = [
//     {
//         // key: value,
//         name: "ㄱㄱㅁ",
//         price: 1000
//     },
//     {
//         name: "ㄱㅈ",
//         price: 1000
//     },
//     {
//         name: "ㅂㄴㄴ",
//         price: 1000
//     },
// ];

// let popped = foo.pop();
// console.log(popped);
// console.log(foo);

// 예제 7-10
let foo = [55, 65, 400 ,150, 24];

foo.forEach((item, index) => {
    console.log(`${index} - ${item}`);
});
console.log("=================");
let bar = foo.map((item, index) =>{
    return  item + 10;
});
console.log(bar);
console.log("=================");
let foobar = foo.filter((item, index) => {
    return item % 2 == 0;
})
console.log(foobar);