
import express from 'express'
import { resolve } from 'path'
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
  .listen(3000, (err) => {
    if (err) { return console.log(err)}
    console.log('funcionando certinho')
  })