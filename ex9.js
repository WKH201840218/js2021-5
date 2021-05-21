
//예제9-3
// Process.on('exit', () => {
//     console.log('프로세스가 종료되었습니다.');
//     console.log(`About to exit with code: ${code}`);
//     console.log(code);
// });

// Process.on('uncaughtException', () => {
//     console.log('예외가 발생했습니다.');
//     console.log(`About to uncaughtException with code: ${err}`);
// });

// error.error.error();


//예제 9-5
// const foo = require("os");

// console.log(foo.hostname());
// console.log(foo.totalmem());


// 예제 9-6
// const foo = require("os");

// console.log(foo.parse('https://naver.com'));


// 예제 9-7
// const fs = require("fs");
// const file = fs.readFileSync("test.txt");

// console.log(file);
// console.log(file.toString());

// console.log(fs.readFileSync('test.txt').toString());


// 예제 9-8
// const fs = require("fs");

// fs.readFile("test.txt", (error, file) => {
//     console.log(file);
//     console.log(file,toString());
// });


// 예제 9-9
// const fs = require("fs");

// fs.writeFileSync("test.txt","안녕하세요!");
// console.log("완료");


//예제 9-10
// const fs = require('fs');

// fs.writeFile('test.txt','잘자!', (error) => {
//     console.log("완료!");
// });


// 예제 9-12
const fs = require("fs");

fs.readFile("none.txt", (error, file) => {
    if(error) {
        console.log("문제 발생");
        console.log(error);
    } else {
        console.log(file);
        console.log(file.toString());
    }
});


// 예제 9-13
// const request = require("request");

// request("https://naver.com", (error, response, body) => {
//     console.log(body);
// });


// 예제 9-14
// const request = require("request");
// const cheerio = require("cheerio");

// const url = "https://naver.com";

// request(url, (error, Response, body) => {
//     const $ = cheerio.load(body);
//     console.log($("strong.new").text);
// });