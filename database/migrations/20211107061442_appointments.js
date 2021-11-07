exports.up = function(knex) {
  return knex.schema
    .table('appointments', (table) => {
      table.increments('id').primary()
      table.specificType('owners', 'interger ARRAY')
      table.dropColumn('appt_id')
      table.dropColumn('owner_ids')
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('appointments', (table) => {
      table.dropColumn('id')
      table.dropColumn('owners')
      table.string('owner_ids')
      table.bigInteger('appt_id')
    })
};
