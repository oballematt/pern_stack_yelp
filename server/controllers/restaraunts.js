const { Restaraunts } = require('../models');

module.exports = {
    createRestaraunt: async () => {
        const { name, location, price_range } = req.body;

        try {
            const restaraunt = await Restaraunts.create({ name, location, price_range});

            return res.json(restaraunt);
        } catch (error) {
            
        };
    },

    getRestaraunts: async () => {
        try {
            const restaraunts = await Restaraunts.findAll();

            
            return res.json(restaraunts);
        } catch (error) {
            
            console.error(error.message);
            return res.status(500).json(error);
        };
        
    },

    getOneRestaraunt: async () => {
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

    updateRestaraunt: async () => {
        const { id } = req.params;
        const { name, location, price_range } = req.body;

        try {

             await Restaraunts.update({
               name,
               location,
               price_range,
               where: {
                   id
               }
            });

            return res.json({message: "Restaraunt was updated!"});
            
        } catch (error) {
          
            console.error(error.message);
            return res.status(500).json(error);
        };
    },

    deleteRestaraunt: async () => {
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