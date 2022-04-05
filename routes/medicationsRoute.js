const express = require('express');
const router = express.Router();
const medicationsController = require('../controllers/medicationsController');

// '/medications/' route 

router
    .route('/')
    .post(medicationsController.addMed);

router
    .route('/:medicationId')
    .put(medicationsController.updateInstructions)
    .delete(medicationsController.removeMed);



module.exports = router;