const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const authorize = require('../middleware/authorize');

// '/users/' route

router
    .route('/signup')
    .post(usersController.addUser);

router
    .route('/login')
    .post(usersController.loginUser);

router
    .route('/:userId/medications')
    .get(usersController.medList); // add authorize

router
    .route('/current')
    .get(authorize, usersController.getUserInfo); // add authorize



module.exports = router;