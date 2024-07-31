const http = require('http')
const fs = require('fs')

//
const _ = require('lodash')

const server = http.createServer((req, res) => {
  //lodash
  const num = _.random(1, 100)
  console.log(num)

  const greet = _.once(() => {
    console.log('hello')
  })

  // set header content type
  res.setHeader('Content-Type', 'text/html')

  let path = './views/'
  switch (req.url) {
    case '/':
      path += 'index.html'
      break
    case '/about':
      path += 'about.html'
      break
    case '/about-me': //redirecting the page from about-me to about
      res.setHeader('Location', '/about')
      res.end()
      break
    default:
      path += '404.html'
      break
  }
  //   res.write('<h1>Hello again</h1>')
  //   res.end()

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err)
      res.end()
    } else {
      //res.write(data)

      res.end(data)
    }
  })
})

server.listen(3000, 'localhost', () => {
  console.log('server is listening on port 3000')
})
