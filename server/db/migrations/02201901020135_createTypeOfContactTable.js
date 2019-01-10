exports.up = function(knex, Promise) {
  return knex.schema.createTable('type_of_contact', function(table){
    table.increments('id');
    table.string('type', 50);
  }) 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('type_of_contact')
}