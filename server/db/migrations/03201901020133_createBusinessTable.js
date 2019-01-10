exports.up = function(knex, Promise) {
  return knex.schema.createTable('type_of_business', function(table){
    table.increments('id');
    table.string('type', 25);
  }) 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('type_of_business')
}