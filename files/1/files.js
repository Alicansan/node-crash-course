const fs = require('fs') //fs is file system

// reading a file
fs.readFile('./docs/blog1.txt', (err, data) => {
  if (err) {
    console.log(err)
  }
  console.log(data.toString())
})

//write a file
fs.writeFile('./docs/blog1.txt', 'hello world', () => {
  console.log('file written')
})
//this one is creating a new file
fs.writeFile('./docs/blog2.txt', 'hello world', () => {
  console.log('file created and written')
})

//make directories and files
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets/', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('directory created')
  })
} else {
  console.log('directory already exists')
}

//delete a file

if (fs.existsSync('./docs/blog2.txt')) {
  fs.unlink('./docs/blog2.txt', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('file deleted')
  })
} else {
  console.log('file does not exist')
}
