exports.up = function(knex) {
  return knex.schema
    .table('appointments', (table) => {
      table.dropColumn('id')
      table.bigInteger('id')
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('appointments', (table) => {
      table.dropColumn('id')
      table.integer('id')
    })
};
