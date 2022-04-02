const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

// '/users/' route

router
    .route('/signup')
    .post(usersController.addUser);

router
    .route('/login')
    .post(usersController.loginUser);

router
    .route('/:userId/medications')
    .get(usersController.medList);



module.exports = router;