
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, title: 'new todo', body: 'todo content', completed: false, user_id: 1},
        {id: 2, title: 'todo 2', body: 'todo content11', completed: false, user_id: 1},
        {id: 3, title: 'todo 3', body: 'todo contentss', completed: false, user_id: 2},
      ]);
    });
};
