const appointmentsData = require('../../data/appointmentsData.js')

exports.seed = function(knex) {
  return knex('appointments').del()
    .then(() => {
      return knex('appointments').insert(appointmentsData)
    })
    .catch(error => console.log(`Error seeding data: ${error}`))
};
