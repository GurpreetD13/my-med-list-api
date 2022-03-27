// Import seed data files (array of objects)
const userData = require('../seed_data/user');
const medicationData = require('../seed_data/medication');



exports.seed = function (knex) {
    // First delete/remove ALL/any existing data then (have to use async callbacks) insert data (repeat for each table 'user' and 'medication')
    return knex('user')
        .del()
        .then(() => {
            return knex('user').insert(userData)
        })
        .then(() => {
            return knex('medication').del()
        })
        .then(() => {
            return knex('medication').insert(medicationData)
        });
};
