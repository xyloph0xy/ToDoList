const express = require('express')
const app = express()
const allRouter = require('./routes')
const port = 3000
const dotenv = require('dotenv');
const session = require('express-session');



dotenv.config()

app.use(
  session({
    secret: process.env.ACCESS_TOKEN_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: 'auto',
    },
  })
);
app.use(express.static('public'));
app.use(express.json())
app.use(allRouter)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

