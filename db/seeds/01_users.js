
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name:'Bilaal', email:'bilaal@test.com'},
        {id: 2, name:'Michelle' , email:'michelle@test.com'},
        {id: 3, name:'Ponyo' , email:'ponyo@test.com'}
      ]);
    });
};
