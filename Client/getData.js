const http = require('http');

const id = 5
const name = 'John'

const options = {
  hostname: '13.40.35.36',
  port: 3000,
  path : '/data/' + id + '/' + name,
  //path: '/data?row_id=5&name=John',
  method: 'GET',
};

const req = http.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);
  
    res.on('data', d => {
        let s = d.toString()
        console.log('result: ' + s)
      });

});

req.on('error', error => {
    console.error(error);
  });

req.end();