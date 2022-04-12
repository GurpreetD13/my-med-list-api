const knex = require('knex')(require('../knexfile'));


exports.addMed = (req, res) => {

    const { din, medication, instructions } = req.body;

    if (!din || !medication || !instructions) {
        return res.status(400).json('Please make sure following fields are not empty: din, medication, instructions')
    }
    const newMed = {
        // get user_id by decoding JWT payload
        user_id: req.decoded.id,
        din: din,
        medication: medication,
        instructions: instructions
    }
    knex.from('medication')
        .insert(newMed)
        .then((id) => {
            newMed.id = id[0];
            res.status(201).json({message: `Successfully added medication: ${medication}`, newMed})
        })
        .catch(err => {
            res.status(500).json(`Error adding medication ${medication}. Error: ${err}`)
        });
};


exports.updateInstructions = (req, res) => {

    if (!req.body.instructions) {
        return res.status(400).json('Please make sure following fields are not empty: instructions')
    }
    knex.from('medication')
        .where({
            id: req.params.medicationId,
        })
        .update({ instructions: req.body.instructions })
        .then((numberOfRowsUpdated) => {
            res.status(200).json(`Successfully updated instructions for medication`)
        })
        .catch(err => {
            res.status(400).json(`Error updating instructions for medication. Error: ${err}`)
        });
};


exports.removeMed = (req, res) => {
    const id = req.params.medicationId;
    knex.from('medication')
        .where({ id: id })
        .delete()
        .then((numberOfRowsDeleted) => {
            if (!numberOfRowsDeleted) {
                return res.status(400).json(`Unable to delete medication`)
            }
            res.status(200).json({ message: `Successfully deleted medication`, id: id })
        })
        .catch(err => {
            res.status(400).json(`Error deleting medication. Error: ${err}`)
        });
};
