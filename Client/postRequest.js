const http = require('http')

const jsonText = JSON.stringify({
    morning: ['Buy the milk', 'Drink the tea'],
    midday: 'Ride a bicycle',
    evening: 'Solve one LeetCode problem',
})

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': jsonText.length,
  },
}

const req = http.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', (d) => { // d is a buffer
    console.log(d)
    
    let s = d.toString()
    console.log(s)
    
    let obj = JSON.parse(s) 
    console.log(obj)

    console.log(obj.data)

    console.log(obj.data.morning[1])
  })
})

req.on('error', (error) => {
  console.error(error)
})

req.write(jsonText)
req.end()