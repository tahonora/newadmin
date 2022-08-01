const express = require('express')
const { resolve } = require('path')
require('dotenv').config

const app = express()


app.use('/',
  express.static(
    resolve(
      // eslint-disable-next-line no-undef
      __dirname,
      './build',
    ),
  ),
)

app
  // eslint-disable-next-line no-undef
  .listen(process.env.PORT || 3000, (err) => {
    if (err) { return console.log(err)}
    console.log('funcionando certinho')
  })
