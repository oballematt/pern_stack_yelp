const router = require('express').Router();

const restarauntController = require('../controllers/restaraunts');

router.post('/restaraunts', restarauntController.createRestaraunt);

router.get('/restaraunts', restarauntController.getRestaraunts);

router.get('/restaraunts/:id', restarauntController.getOneRestaraunt);

router.put('/restaraunts/:id', restarauntController.updateRestaraunt);

router.delete('/restaraunts/:id', restarauntController.deleteRestaraunt);

module.exports = router;
