const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())


const logger = (request, response, next) => {
  console.log(request.get('host'))
  next()
}
app.use(logger)
// const port = 'https://sniff-api.herokuapp.com'

app.locals.title = 'Sniff'

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), (request, response) => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
})

app.get('/api/v1/', (request, response) => {
  response.json({test:'test'})
})
