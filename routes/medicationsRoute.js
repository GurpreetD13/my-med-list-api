const express = require('express');
const router = express.Router();
const medicationsController = require('../controllers/medicationsController');

// '/medications/' route 

router
    .route('/')
    .post(medicationsController.addMed);

router
    .route('/:medicationId')
    .delete(medicationsController.removeMed)
    .put(medicationsController.editMed);



module.exports = router;