const express = require('express');
const router = express.Router();
const dinSearchService = require('../services/dinSearchService');

// '/drug-identification-search/' route

router
    .route('/:din')
    .get(dinSearchService.getActiveIngredientByDIN);



module.exports = router;