exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', function(table){
    table.increments('id');
    table.integer('user_id').references('id').inTable('users');
    table.string('first_name', 25).notNullable();
    table.string('last_name', 100).notNullable();
    table.string('personal_email', 100).unique();
    table.string('work_email', 100).unique();
    table.string('company_name', 100);
    table.integer('work_number', 25);
    table.integer('work_number_extension', 10);
    table.integer('work_cell_number', 25)
    table.string('work_street_address',100);
    table.string('work_state_address', 25);
    table.string('work_country_address', 25);
    table.integer('personal_cellphone_number', 25);
    table.integer('home_phone_number', 25);
    table.string('home_street_address', 100);
    table.string('home_state_address', 25);
    table.string('home_country_address', 25);
    table.integer('type_of_business', 10).references('id').inTable('type_of_business');
    table.integer('type_of_contact', 10).references('id').inTable('type_of_contact');
    table.string('notes', 500);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  }) 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts')
}