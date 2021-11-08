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

app.get('/api/v1/appointments/:userId', (request, response) => {
  sniffDB('appointments').select()
  .then(appointments => {
    const usersAppointments = appointments.filter(appointment => appointment.owners.includes(+request.params.userId))
    return detailedAppointments(usersAppointments, +request.params.userId)
  })
  .then(appts => response.json(appts))
  .catch(error => response.status(500).send(error.message))
})

const detailedAppointments = (appointments, currentUserId) => {
  return sniffDB('users').select()
    .then(users => {
      const updatedAppointments = appointments.map(appointment => {
        const usersId = appointment.owners.find(id => id !== currentUserId)
        const otherUser = users.find(user => user.id === usersId)
        return {
          id: appointment.id,
          dogPark: appointment.dog_park,
          date: appointment.date,
          ownersId: otherUser.id,
          ownerName: otherUser.owner_name,
          dogName: otherUser.dog_name,
          profilePic: otherUser.profile_pic
        }
      })
      return updatedAppointments
    })
}

app.get('/api/v1/parks', (request, response) => {
  return sniffDB('parks').select()
    .then(parks => response.json(parks))
    .catch(error => response.status(500).send(error.message))
})

  // post
app.post('/api/v1/appointments', (request, response) => {
  const playdate = request.body
  sniffDB('appointments')
    .insert({
      owners: playdate.ownerIds,
      dog_park: playdate.dogPark,
      date: playdate.date,
    })
    .then(() => {
      response.json('Appointment posted!')
    })
})

  // delete
app.delete('/api/v1/appointments/:apptId', (request, response) => {
  sniffDB('appointments').select()
    .where('id', +request.params.apptId)
    .del()
    .then(() => {
      response.json('Appointment deleted')
    })
})

// listener
app.listen(app.get('port'), (request, response) => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
  console.log(process.env.DATABASE_URL)
})
