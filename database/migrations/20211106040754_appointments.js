exports.up = function(knex) {
  return knex.schema
    .table('appointments', (table) => {
      table.integer('id').primary();
      table.string('owner_ids');
      table.string('location')
      table.string('date')

      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('appointments')
};
