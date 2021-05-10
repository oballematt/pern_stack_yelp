const router = require('express').Router();
const profileController = require('../controllers/profile');
const authorization = require('../middleware/authorization')


router.get('/profile', authorization, profileController.getVerifiedUser)

module.exports = router;