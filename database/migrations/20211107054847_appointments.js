exports.up = function(knex) {
  return knex.schema
    .table('appointments', (table) => {
      table.dropColumn('id')
      table.bigInteger('apptId')
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('appointments', (table) => {
      table.dropColumn('apptId')
      table.integer('id')
    })
};
