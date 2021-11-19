
exports.up = function(knex) {
  return knex.schema
  .createTable('users', function (table) {
    table.increments();
    table.string('name');
    table.string('email');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
  .createTable('todos', function (table) {
    table.increments();
    table.string('title');
    table.string('body');
    table.boolean('completed').notNullable().defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.integer('user_id').unsigned().references('id').inTable('users');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users').dropTable('todos');
};
