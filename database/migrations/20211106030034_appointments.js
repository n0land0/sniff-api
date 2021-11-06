
exports.up = function(knex) {
  return knex.schema
    .createTable('appointments', (table) => {
      // table.increments('id').primary();
      table.integer('id').primary();
      table.string('owner_name');

      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('appointments')
};
