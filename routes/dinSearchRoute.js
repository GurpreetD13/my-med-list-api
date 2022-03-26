const express = require('express');
const router = express.Router();
const dinSearchService = require('../services/dinSearchService');

// '/drug-identification-search/' route

router
    .route('/:din')
    .get(dinSearchService.getActiveIngredient);



module.exports = router;