const knex = require('knex')(require('../knexfile'));
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



exports.addUser = (req, res) => {

    const { name, user_name, password } = req.body;

    if (!name || !user_name || !password) {
        return res.status(400).json('Please make sure following fields are not empty: name, user name, password')
    }
    // use bcrypt to hash password
    const hashedPassword = bcrypt.hashSync(password, 10);

    knex.from('user')
        .insert({
            name: name,
            user_name: user_name,
            password: hashedPassword, // replace with hashedPassword
        })
        // .insert(req.body) // does same as above insert, but above more explict. Insert by default returns newly created id
        .then((id) => {
            res.status(201).json(`Successfully created new user: ${user_name}`)
        })
        .catch(err => {
            res.status(500).json(`Error creating user ${user_name}. Error: ${err}`)
        });
};


exports.loginUser = (req, res) => {

    const { user_name, password } = req.body;

    if (!user_name || !password) {
        return res.status(400).json('Please make sure following fields are not empty: user name, password')
    }
    // Authenticate user name and password
    knex.from('user')
        .where({ user_name: user_name })
        .first()
        .then((user) => {

            const isPasswordCorrect = bcrypt.compareSync(password, user.password)
            
            if (!isPasswordCorrect) {
                return res.status(400).json('Invalid password')
            }
            // and create auth token, add user's name, and send back to client
            const token = jwt.sign({ name: user.name, id: user.id }, 'secretKeyString')

            res.status(200).json({ token: token });
        })
        .catch(err => {
            res.status(400).json(`Invalid user name`)
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


// GET user info (id, name) once user logged in from token payload (could also get from user table)
exports.getUserInfo = (req, res) => {
    res.json(req.decoded);
};