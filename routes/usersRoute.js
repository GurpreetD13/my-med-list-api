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
    .get(authorize, usersController.medList);

router
    .route('/current')
    .get(authorize, usersController.getUserInfo);



module.exports = router;