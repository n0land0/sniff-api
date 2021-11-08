exports.up = function(knex) {
  return knex.schema
    .createTable('users', (table) => {
      // table.increments('id').primary();
      table.integer('id').primary();
      table.string('owner_name');
      table.string('dog_name');
      table.string('profile_pic');
      table.string('dog_breed');
      table.string('bio');
      table.json('appointments');

      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('users')
};
