const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

// const port = 'https://sniff-api.herokuapp.com'

app.locals.title = 'Sniff'

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})

app.get('/', (request, response) => {
  response.json({test:'test'})
})
