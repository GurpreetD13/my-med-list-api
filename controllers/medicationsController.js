const knex = require('knex')(require('../knexfile'));


exports.addMed = (req, res) => {

    // have to figure out where to get user_id?? and in validation
    // const user_id = req.header.user_id

    const { user_id, din, medication, instructions } = req.body;

    if (!din || !medication || !instructions) {
        return res.status(400).json('Please make sure following fields are not empty: din, medication, instructions')
    }

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
            res.status(500).json(`Error adding medication ${medication}. Error: ${err}`)
        });
};


exports.removeMed = (req, res) => {
    knex.from('medication')
        .where({ id: req.params.medicationId })
        .delete()
        .then((numberOfRowsDeleted) => {
            if (!numberOfRowsDeleted) {
                return res.status(400).json(`Unable to delete medication`)
            }
            res.status(200).json(`Successfully deleted medication`)
        })
        .catch(err => {
            res.status(400).json(`Error deleting medication. Error: ${err}`)
        });
};


exports.updateInstructions = (req, res) => {

    if (!req.body.instructions) {
        return res.status(400).json('Please make sure following fields are not empty: instructions')
    }
    knex.from('medication')
        .where({
            id: req.params.medicationId,
            // add some validation so that only logged in user can alter own medications and not anyone else's (also for delete)
            // and? user_id: req.body.user_id
        })
        .update({ instructions: req.body.instructions })
        .then((numberOfRowsUpdated) => {
            res.status(200).json(`Successfully updated instructions for medication`)
        })
        .catch(err => {
            res.status(400).json(`Error updating instructions for medication. Error: ${err}`)
        });
};