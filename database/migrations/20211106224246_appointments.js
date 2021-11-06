exports.up = function(knex) {
  return knex.schema
    .table('appointments', (table) => {
      table.dropColumn('location')
      table.string('dog_park')
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('appointments', (table) => {
      table.dropColumn('dog_park')
      table.string('location')
    })
};
