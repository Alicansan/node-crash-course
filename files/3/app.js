const express = require('express')

// express app

const app = express()

//register view engine
app.set('view engine', 'ejs')
//app.set('views', './myTemplates'); // Set custom views directory if you want to use a different directory

//listen  for requests

app.listen(3000)

app.get('/', (req, res) => {
  //res.send('Hello World')

  //res.sendFile('./views/index.html', { root: __dirname }) //express way
  res.render('index') // ejs way
})

app.get('/about', (req, res) => {
  //res.sendFile('./views/about.html', { root: __dirname })
  res.render('about')
})

app.get('/blogs/create', (req, res) => {
  res.render('create')
})

//404
app.use((req, res) => {
  //res.sendFile('./views/404.html', { root: __dirname })

  res.status(404).render('404')
})
