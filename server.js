// dummy data
const userData = require('./userData')
// express & related
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
// knex
const knex = require('knex')
const knexfile = require('./database/knexfile')
const environment = process.env.NODE_ENV || 'development'
const configuration = knexfile[environment]
// const database = knex(configuration)
const sniffDB = knex(configuration)
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
  // GET
app.get('/api/v1/users', (request, response) => {
  sniffDB('users').select()
  .then(users => response.json(users))
  .catch(error => response.status(500).send(error.message))
})

app.get('/api/v1/users/:userId', (request, response) => {
  sniffDB('users').where('id', request.params.userId).select()
  .then(([user]) => response.json(user))
  .catch(error => response.status(500).send(error.message))
})

  // POST
app.post('/api/v1/playdates', (request, response) => {
  let userIdsInvolved = []
  sniffDB('users').select()
  .then(users => {
    request.body.forEach(playdate => {
      users.forEach(user => {
        if (user.id === playdate.userId) {
          userIdsInvolved.push(user.id)
          const playmate = users.find(user => user.id === playdate.playmate)
          playdate.playmate = {
            id: playmate.id,
            ownerName: playmate.owner_name,
            dogName: playmate.dog_name,
          }
          const updatedAppts = [...user.appointments, playdate].sort((apptA, apptB) => new Date(apptB.date) - new Date(apptA.date))
          sniffDB('users')
            .where('id', user.id)
            .update({ appointments: JSON.stringify(updatedAppts) }, 'appointments')
            .then(() => console.log('working'))
            .catch(error => {throw new Error()})
        }
      })
    })
  })
  .then(() => response.status(201).json(`Playdate added for users ${userIdsInvolved[0]} and ${userIdsInvolved[1]}.`))
  .catch(error => response.status(500).json(error.message))
})


app.delete('/api/v1/appointments/:appointmentId', (request, response) => {
  let original;
  let updated;
  sniffDB('users').select()
    .then(users => {
      users.forEach(user => {
        original = user.appointments
       user.appointments.forEach(appointment => {
         if(appointment.id === +request.params.appointmentId) {
           const updatedAppointments = user.appointments.filter(app => app.id !== +request.params.appointmentId)
           updated = updatedAppointments
           sniffDB('users').select()
            .where('id', user.id)
            .update({ appointments: JSON.stringify(updatedAppointments) })
         }
       })
      })
    })
  response.json(updated)
})




// listener
app.listen(app.get('port'), (request, response) => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
  console.log(process.env.DATABASE_URL)
})
