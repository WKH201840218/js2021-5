let date = new Date()
h = date.getHour();

console.log( h < 3 || h > 8);
console.log( h >= 3 && h <= 8);

let type = typeof(date.getHours());
console.log(type);

const conl = "산수선언";
console.log(con);

let input = 31;

if( date.getHours )
{
    console.log("오전");
}
console.log("오후");

console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getday())
console.log(date.getTime())
console.log(date.getUTCMinutes())
console.log(date.getSeconds())
console.log(date.getDate())
// let intput = 32;
// if ( input % 2 == 0 ){
//     console.log("홀수");
// }
// 커밋테스트
