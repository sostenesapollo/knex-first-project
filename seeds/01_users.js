
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'name test 1', email: 'email test 1'},
        {id: 2, name: 'name test 2', email: 'email test 2'},
        {id: 3, name: 'name test 3', email: 'email test 3'}
      ]);
    });
};
