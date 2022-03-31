const knex = require('knex')(require('../knexfile').development);


exports.addMed = (req, res) => {

    // have to figure out where to get user_id?? and in validation
    // const user_id = req.header.user_id

    const { user_id, din, medication, instructions } = req.body;

    // if (!din || !medication || !instructions) {
    //     return res.status(400).json('Please make sure following fields are not empty: din, medication, instructions')
    // }
    
    knex.from('medication')
        .insert({
            user_id: user_id,
            din: din,
            medication: medication,
            instructions: instructions
        })
        // .insert(req.body) // does same as above insert, but above more explict. Insert by default returns newly created id
        .then((id) => {
            res.status(201).json(`Successfully added medication: ${medication}`)
        })
        .catch(err => {
            res.status(500).json(`Error adding medication ${medication}`)
        });
};


exports.removeMed = (req, res) => {

};


exports.updateInstructions = (req, res) => {

};