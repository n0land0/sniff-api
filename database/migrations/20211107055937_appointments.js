exports.up = function(knex) {
  return knex.schema
    .table('appointments', (table) => {
      table.dropColumn('apptId')
      table.bigInteger('appt_id')
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('appointments', (table) => {
      table.dropColumn('appt_id')
      table.bigInteger('apptId')
    })
};
