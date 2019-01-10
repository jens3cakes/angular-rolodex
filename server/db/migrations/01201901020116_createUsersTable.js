exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments('id');
    table.string('first_name', 25).notNullable();
    table.string('last_name', 50).notNullable();
    table.string('username', 25).unique().notNullable();
    table.string('password').notNullable();
    table.string('email', 50).unique().notNullable();
    table.string('cellphone_number', 25);
    table.string('home_phone_number', 25);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}