const router = require('express').Router();

const usersController = require('../controllers/users');

router.post('/register', usersController.createUser);

router.post('/login', usersController.loginUser)

module.exports = router