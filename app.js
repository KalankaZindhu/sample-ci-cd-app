const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const signJwtRoute = require('./routes/signJwt')

app.use(bodyParser.json())

app.use('/', signJwtRoute)

const port = 8000
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)
})
