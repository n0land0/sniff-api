const parksData = require('../../parksData.js')

exports.seed = function(knex) {
  return knex('parks').del()
    .then(() => {
      return knex('parks').insert(parksData)
    })
    .catch(error => console.log(`Error seeding data: ${error}`))
};
