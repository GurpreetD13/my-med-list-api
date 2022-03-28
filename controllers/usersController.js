const knex = require('knex')(require('../knexfile').development);


exports.addUser = (req, res) => {

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
        })
};