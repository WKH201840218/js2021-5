var output = '';
output += 'appCodeName: ' + navigator.appCodeName + '\n';
output += 'appName: ' + navigator.appCodeName + '\n';
output += 'appVersion: ' + navigator.appVersion + '\n';
output += 'platform: ' + navigator.platform + '\n';
output += 'userAgent: ' + navigator.userAgent;
alert(output);

if (navigator.userAgent.toLowerCase().indexOf('iphone') >= 0
|| navigator.userAgent.toLowerCase().indexOf('ipad') >= 0
|| navigator.userAgent.toLowerCase().indexOf('ipod') >= 0
|| navigator.userAgent.toLowerCase().indexOf('android') >= 0) {
    alert('모바일 웹 브라우저입니다.');
} else {
    alert('데스크톱 웹 브라우저입니다.');
}





// let number = 31;

// console.log(number % 2 == 0?"짝수":"홀수");

// let test;
// test = test ? test : "초기화 해 주세요.";
// console.log(test);

// number = number ? number : "초기화 해 주세요.";
// console.log(number);

// test =  "초기화 해 주세요.";
// console.log(test);

// number =  "초기화 해 주세요";
// console.log(number);

// // 1234

