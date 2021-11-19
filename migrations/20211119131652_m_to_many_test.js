
exports.up = function(knex) {
    return knex.schema
    .createTable('disciplina', function (table) {
        table.increments()
        table.string('nome')
    })
    .createTable('professor', function (table) {
        table.increments()
        table.string('nome')
    })
    .createTable('disciplina_professor', function (table) {
        table.increments()
        table.integer('disciplina_id').unsigned().references('id').inTable('disciplina');
        table.integer('professor_id').unsigned().references('id').inTable('professor');
    })
};

exports.down = function(knex) {
  
};
