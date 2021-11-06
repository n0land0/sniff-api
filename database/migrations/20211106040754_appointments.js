exports.up = function(knex) {
  return knex.schema
    .table('appointments', (table) => {
      table.string('owner_ids');
      table.string('location')
      table.string('date')
      table.dropColumn('owner_name')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('appointments')
};
