const { Restaurants } = require('../models');

module.exports = {
    createRestaurant: async (req, res) => {
        const { name, location, price_range } = req.body;

        try {
            const restaurant = await Restaurants.create({ name, location, price_range});

            return res.json(restaurant);

        } catch (error) {
            console.error(error.message);
            return res.status(500).json(error);
        };
    },

    getRestaurants: async (req, res) => {
        try {
            const restaurants = await Restaurants.findAll();

            
            return res.json(restaurants);
            
        } catch (error) {
            
            console.error(error.message);
            return res.status(500).json(error);
        };
        
    },

    getOneRestaurant: async (req, res) => {
        const { id } = req.params;
        
        try {
            
            const restaurant = await Restaurants.findOne({
                where: {
                    id
                }
            });

            return res.json(restaurant);

        } catch (error) {
            
            console.error(error.message);
            return res.status(500).json(error);
        };
    },

    updateRestaurant: async (req, res) => {
        const { id } = req.params;
        const { name, location, price_range } = req.body;

        try {

            const restaurant = await Restaurants.findOne({
                where: {
                    id
                }
            });

            restaurant.name = name;
            restaurant.location = location;
            restaurant.price_range = price_range;

            await restaurant.save();
            
            return res.json(restaurant);

        } catch (error) {
          
            console.error(error.message);
            return res.status(500).json(error);
        };
    },

    deleteRestaurant: async (req, res) => {
        const { id } = req.params;
        
        try {
            await Restaurants.destroy({
                where: { 
                    id
                }
            });

            return res.json({message: 'Restaurant was deleted!'});
        } catch (error) {
            
            console.error(error.message);
            return res.status(500).json(error);
        };
    }

};