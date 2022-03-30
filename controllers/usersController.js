const knex = require('knex')(require('../knexfile').development);



exports.addUser = (req, res) => {

    const { name, user_name, password } = req.body;

    if (!name || !user_name || !password) {
        return res.status(400).json('Please make sure following fields are not empty: name, user name, password')
    }
    knex.from('user')
        // .insert({
        //     name: name,
        //     user_name: user_name,
        //     password: password,
        // })
        .insert(req.body) // by default returns newly created id
        .then((id) => { 
            res.status(201).json(`Successfully created new user id: ${id}`) })
        .catch(err => {
            res.status(500).json(`Error creating user ${user_name}`)
        });
};


// GET All medication (List) from medication table for a specific user_id (foreign key) from the req.paramas in request ('/users/:userId/medications')
exports.medList = (req, res) => {
    knex.from('medication') // table. Can be written as knex('medication') too
        .select('*') // automatically selects all even if not specified
        .where({ user_id: req.params.userId })
        .then((medList) => {
            res.status(200).json(medList)
        })
        .catch(err => {
            res.send(500).json(`Error getting Med List for user_id: ${req.params.userId}. Error: ${err}`)
        });
};