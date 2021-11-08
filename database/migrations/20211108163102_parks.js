exports.up = function(knex) {
  return knex.schema
    .createTable('parks', (table) => {
      // table.increments('id').primary();
      table.integer('id').primary();
      table.string('name');
      table.json('coords');

      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('parks')
};
