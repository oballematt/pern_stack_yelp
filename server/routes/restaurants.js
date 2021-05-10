const router = require('express').Router();

const restaurantController = require('../controllers/restaurants');

router.post('/restaurants', restaurantController.createRestaurant);

router.get('/restaurants', restaurantController.getRestaurants);

router.get('/restaurants/:id', restaurantController.getOneRestaurant);

router.put('/restaurants/:id', restaurantController.updateRestaurant);

router.delete('/restaurants/:id', restaurantController.deleteRestaurant);

module.exports = router;
