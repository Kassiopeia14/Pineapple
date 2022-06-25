const http = require('http')

const form = 'abc=7&buba=ppp'

const options = {
  hostname: '3.10.138.196',
  port: 3000,
  path: '/todos/text',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': form.length,
  }, 
}

const req = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`)
    
    let body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        // at this point, body has the entire request body stored in it as a string
    });

    /*
    res.on('data', (d) => { // d is a buffer
      console.log('d: ' + d)
      
      let s = d.toString()
      console.log('s: ' + s)
    })*/
  })

req.on('error', (error) => {
    console.error('error: ' + error)
  })
  
  req.write(form)
  req.end()
