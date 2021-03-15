
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){
      table.increments();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
  .createTable('animes', function(table){
    table.increments();
    table.string('anime_name').notNullable();
    table.string('description', 1500);
    table.integer('duration').notNullable();
    table.string('status').notNullable();
    table.string('image_url');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.integer('user_id').references('id').inTable('users')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('animes').dropTable('users');
};
