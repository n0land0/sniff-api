// dummy data
const userData = require('./userData')
// express & related
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
// knex
const knex = require('knex')
const knexfile = require('./knexfile')
const environment = process.env.NODE_ENV || 'development'
const configuration = knexfile[environment]
const database = knex(configuration)
// middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
const logger = (request, response, next) => {
  console.log(request.get('host'))
  next()
}
app.use(logger)
// setup
app.locals.title = 'Sniff'
app.set('port', process.env.PORT || 3001)

// endpoints
app.get('/api/v1/users', (request, response) => {
  response.json(userData)
})

app.get('/api/v1/users/:userId', (request, response) => {
  response.json(userData.find(user => user.id == request.params.userId))
})

app.post('/api/v1/playdates', (request, response) => {
  request.body.forEach(playdate => {
    userData.forEach(user => {
      if (user.id === playdate.userId) {
        const playmate = userData.find(user => user.id === playdate.playmate)
        playdate.playmate = {
          ownerName: playmate.ownerName,
          dogName: playmate.dogName,
        }
        user.appointments.push(playdate)
      }
    })
  })
  response.json(userData)
})

app.get('/api/v1/playdates/:userId', (request, response) => {
  const currentUser = userData.find(user => user.id === +request.params.userId)
  const playdates = currentUser.appointments.map(appointment => {
    const otherUserId = appointment.usersInvolved.find(id => +request.params.userId !== id)
    const otherUser = userData.find(user => otherUserId)
    return {
      ownerName: otherUser.ownerName,
      dogName: otherUser.dogName,
      ...appointment
    }
  })
  response.json(playdates)
})

// listener
app.listen(app.get('port'), (request, response) => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
})
