const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog1.txt', {
  encoding: 'utf8',
})

const writeStream = fs.createWriteStream('./docs/blog2.txt')

// readStream.on('data', (chunk) => {
//   console.log('----------')
//   console.log(chunk)
//   writeStream.write('\nNEw\n')
//   writeStream.write(chunk)
// })

//piping

readStream.pipe(writeStream) //shorthand of the above code
