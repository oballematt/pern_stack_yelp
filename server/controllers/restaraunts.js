const { Restaraunts } = require('../models');

module.exports = {
    createRestaraunt: async (req, res) => {
        const { name, location, price_range } = req.body;

        try {
            const restaraunt = await Restaraunts.create({ name, location, price_range});

            return res.json(restaraunt);
        } catch (error) {
            console.error(error.message);
            return res.status(500).json(error);
        };
    },

    getRestaraunts: async (req, res) => {
        try {
            const restaraunts = await Restaraunts.findAll();

            
            return res.json(restaraunts);
        } catch (error) {
            
            console.error(error.message);
            return res.status(500).json(error);
        };
        
    },

    getOneRestaraunt: async (req, res) => {
        const { id } = req.params;
        
        try {
            
            const restaraunt = await Restaraunts.findOne({
                where: {
                    id
                }
            });

            return res.json(restaraunt);

        } catch (error) {
            
            console.error(error.message);
            return res.status(500).json(error);
        };
    },

    updateRestaraunt: async (req, res) => {
        const { id } = req.params;
        const { name, location, price_range } = req.body;

        try {

            const restaraunt = await Restaraunts.findOne({
                where: {
                    id
                }
            });

            restaraunt.name = name;
            restaraunt.location = location;
            restaraunt.price_range = price_range;

            await restaraunt.save();
            
            return res.json(restaraunt);

        } catch (error) {
          
            console.error(error.message);
            return res.status(500).json(error);
        };
    },

    deleteRestaraunt: async (req, res) => {
        const { id } = req.params;
        
        try {
            await Restaraunt.destroy({
                where: { 
                    id
                }
            });
        } catch (error) {
            
            console.error(error.message);
            return res.status(500).json(error);
        };
    }

};