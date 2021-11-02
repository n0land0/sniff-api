const userData = require('../../userData.js')

const modifiedUserData = userData.map(userObj => {
  return {
    ...userObj,
    appointments: JSON.stringify(userObj.appointments)
  }
})

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      // return knex('users').insert(modifiedUserData, 'id')
      return knex('users').insert(modifiedUserData)
      // return knex('users').insert((userData), 'id')
    })
    .catch(error => console.log(`Error seeding data: ${error}`))
};
