exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('type_of_business').del()
    .then(function () {
      // Inserts seed entries
      return knex('type_of_business').insert([
        {id: 1, type: 'automotive'},
        {id: 2, type: 'electrical'},
        {id: 3, type: 'plumbing'},
        {id: 4, type: 'landscaping'},
        {id: 5, type: 'retail'},
        {id: 6, type: 'childcare'},
        {id: 7, type: 'painting'},
        {id: 8, type: 'carpentry'},
        {id: 9, type: 'cleaning'},
        {id: 10, type: 'food service'},
        {id: 11, type: 'banking'},
        {id: 12, type: 'hospitality'},
        {id: 13, type: 'medical'},
        {id: 14, type: 'computer hardware'},
        {id: 15, type: 'computer software'},
        {id: 16, type: 'real estate'},
        {id: 17, type: 'law'},
        {id: 18, type: 'other'}

      ]);
    });
};