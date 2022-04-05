// Create 2 tables with all necessary columns/fields) in migration file:
// 1. 'user' table with it's 'id' as primary key (which increments +1)
// 2. 'medication' table with foreign key 'user_id' which references primary key/id of 'user' table in order to relate/connect the two tables.

exports.up = function (knex) {

    return knex.schema
        .createTable('user', (table) => {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.string('user_name').notNullable(); // 'user_name' must be unique
            table.unique('user_name');
            table.string('password').notNullable();
        })
        .createTable('medication', (table) => {
            table.increments('id').primary();
            table
                .integer('user_id')
                .unsigned() // (means cannot be negative)
                .notNullable()
                .references('id')
                .inTable('user')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table.string('din', 8).notNullable();
            table.string('medication').notNullable();
            table.string('instructions').notNullable();
        })
};


exports.down = function (knex) {
    return knex.schema.dropTable('medication').dropTable('user');
};

// have to drop tables in reverse order that created them