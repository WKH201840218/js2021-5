// // [설치]
//  $npm install express

// // const { response } = require('express');

// // 모듈의 객체 생성
// const express = require('express');
// // const { request } = require('http');


// // 서버 생성
// const app = express();

// // request 이벤트 리스너 설정
// app.use((request, response) =>{
//     response.send('<h1>Hello express</h1>');
// });


// // 서버 실핼
// app.listen(52273, () => {
//     console.log('Server running at http://127.0.0.1:52273');
// });






// const express = require('express');

// const app = express();

// app.get('/page:id',(request, response) =>{
//     response.send('<h1>Hello express</h1>');
// });

// app.listen(52273, () => {
//     console.log('Server running at http://127.0.0.1:52273');
// });



// const express = require('express');

// const app = express();

// app.get('*',(request, response) =>{
//     response.status(404);
//     response.set('methodA', 'ABCD');
//     response.set({
//         methodB1: 'FGHIJ',
//         methodB2: 'KLMNO',
//     });
//     response.send('본문을 입력합니다.');
//   });

//   app.listen(52273, () => {
//     console.log('Server running at http://127.0.0.1:52273');
// });





// const express = require('express');
// const fs = require('fs');

// const app = express();

// app.get('/image', (request, response) =>{
//     fs.readFile('image.png', (error, data) => {
//     response.type
//     response.send(data);
//     });
//   });

//   app.get('/audio', (request, response) =>{
//     fs.readFile('audio.mp3', (error, data) => {
//     response.type
//     response.send(data);
//     });
//   });

//   app.listen(52273, () => {
//     console.log('Server running at http://127.0.0.1:52273');
// });





// const express = require('express');

// const app = express();

// app.get('*',(request, response) =>{
//     response.status(404);
//     response.send('해당경로에 아무것도 없습니다.');
//   });

//   app.listen(52273, () => {
//     console.log('Server running at http://127.0.0.1:52273');
// });





// const express = require('express');

// const app = express();

// app.get('*',(request, response) =>{
//     response.send('http://naver.com');
//   });

//   app.listen(52273, () => {
//     console.log('Server running at http://127.0.0.1:52273');
// });



const express = require('express');

const app = express();

app.get('*',(request, response) =>{
    console.log(request.query);
    response.send(request.query);
  });

  app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});





// const express = require('express');

// const app = express();
// app.use(express.static('public'));

// app.get('*',(request, response) =>{
//     response.send(404);
//     response.send('파일이 없습니다');
//   });

//   app.listen(52273, () => {
//     console.log('Server running at http://127.0.0.1:52273');
// });



// const express = require('express');
// const morgan = require('morgan');

// const app = express();
// app.use(express.static('public'));
// app.use(morgan('combined'));

// app.get('*',(request, response) =>{
//     response.send('명령 프롬프트를 확인해 주세요.');
//   });

//   app.listen(52273, () => {
//     console.log('Server running at http://127.0.0.1:52273');
// });




// const express = require('express');
// const morgan = require('morgan');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(express.static('public'));
// app.use(morgan('combined'));
// app.use(bodyParser.urlencloded({ extends: false}));

// app.get('/',(request, response) =>{
//     let output = '';
//     output += '<form method="post">';
//     output += '<input type="text" name="a" />';
//     output += '<input type="text" name="b" />';
//     output += '<input type="submit">';
//     output += '</form>';
//     response.send(output);
//   });
//   app.post('/',(request, response) =>{
//     response.send(output);
//   });
//   app.listen(52273, () => {
//     console.log('Server running at http://127.0.0.1:52273');
// });













