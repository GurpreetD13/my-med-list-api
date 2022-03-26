const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

// '/users/' route

router
    .route('/')
    .post(usersController.addUser);

router
    .route('/:userId/medications')
    .get(usersController.medList);



module.exports = router;