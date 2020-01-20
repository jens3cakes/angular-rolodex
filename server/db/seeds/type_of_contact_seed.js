exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('type_of_contact').del()
    .then(function () {
      // Inserts seed entries
      return knex('type_of_contact').insert([
        {id: 1, type: 'personal'},
        {id: 2, type: 'business'},
        {id: 3, type: 'family'},
      ])
      });
};