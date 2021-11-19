
exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('bio');
    table.timestamps();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
