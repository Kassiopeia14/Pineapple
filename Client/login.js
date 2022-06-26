const http = require('http');

const options = {
  host: 'localhost',
  port: 3000,
  path: '/login',
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=UTF-8'
  }
};

const req = http.request(options, (res) => {
    if (res.statusCode !== 200) {
      console.error(`Did not get a Created from the server. Code: ${res.statusCode}`);
      res.resume();
      return;
    }
  
    let data = '';
  
    res.on('data', (chunk) => {
      data += chunk;
    });
  
    res.on('close', () => {
      console.log('Added new user');
      console.log(JSON.parse(data));
    });
  });

const requestData = {
    user: 'user1',
    password: 'pass123'
  };
  
req.write(JSON.stringify(requestData));

req.end();

req.on('error', (err) => {
  console.error(`Encountered an error trying to make a request: ${err.message}`);
});