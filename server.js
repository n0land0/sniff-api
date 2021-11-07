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
  .then((user) => response.json(user))
  .catch(error => response.status(500).send(error.message))
})

app.post('/api/v1/appointments', (request, response) => {
  const appointment = request.body
  sniffDB('appointments')
    .insert({
      owners: appointment.ownerIds,
      dog_park: appointment.dogPark,
      date: appointment.date,
    })
    .then(() => {
      response.json('Appointment posted!')
    })
})
//
// app.delete('/api/v1/appointments/:appointmentId', (request, response) => {
//   const { appointmentId } = request.params
//   sniffDB('appointments').select()
//     .where('id', appointmentId)
//     .del()
//     .returning(*)
//     .then((appointment) => {
//       const owners = appointment.owners
//       response.json(`Appointment ${appointment.id} with user${owners[0]} and user${owners[1]}`)
//     })
// })


// listener
app.listen(app.get('port'), (request, response) => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
  console.log(process.env.DATABASE_URL)
})
